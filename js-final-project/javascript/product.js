var addCart = $(".add_btn");
console.log(addCart);

$(document).ready(function () {
  // function getProducts() {
  // var id = window.location.search.split("=")[1];
  // URLSearchParams.get(urlParam);
  $.get(
    "https://5d76bf96515d1a0014085cf9.mockapi.io/product/",
    function (data) {
      var productsData;
      for (var i = 0; i < data.length; i++) {
        productsData = [
          {
            id: data[i].id,
            title: data[i].name,
            price: data[i].price,
            preview: data[i].preview,
            inCart: 0,
          },
        ];

        console.log(productsData);
      }

      for (var i = 0; i < addCart.length; i++) {
        addCart[i].addEventListener("click", function () {
          totalCost(productsData);
        });
      }

      function totalCost(product) {
        localStorage.setItem("totalCost", product.price);
      }
    }
  );

  // }
  // getProducts();
  // console.log(products);
});

// addCart.addEventListener("click", function () {});

// Inserting data into local storage

// var addBtn = $("#add_btn");
// $(addBtn).attr("onclick", addBtn());

// var crtCount = $("#count");

var crtCount = document.getElementById("count");
console.log(crtCount);
var cartData = [];
var initialVal;

if (localStorage.getItem("count") == null) {
  localStorage.setItem("count", "0");
} else {
  var cartVal = localStorage.getItem("count");
  localStorage.setItem("count", cartVal);
}

// Increase Cart counting on click

function cartCount() {
  if (window.localStorage.getItem("count") === null) {
    initialVal = 0;
  } else {
    initialVal = JSON.parse(window.localStorage.getItem("count"));
    console.log(initialVal);
    $(crtCount).html(initialVal);
    console.log(crtCount);
  }
  var curVal = initialVal + 1;
  window.localStorage.setItem("count", curVal);
  $(cartCount).html(window.localStorage.getItem("count"));
}
$(crtCount).html(window.localStorage.getItem("count"));

// /add data in to list

function addDataInList(prodData) {
  if (window.localStorage.getItem("prod-list") === null) {
    cartData = [];
  } else {
    cartData = JSON.parse(window.localStorage.getItem("prod-list"));
  }

  // if list is empty then push obj in it
  if (cartData.length === 0) {
    var myObj = {
      id: prodData.id,
      title: prodData.name,
      count: 1,
      price: prodData.price,
      preview: prodData.preview,
    };
    cartData.push(myObj);
  } else if (cartData.length != 0) {
    var w = 0;
    for (var i = 0; i < cartData.length; i++) {
      if (cartData[i].id == prodData.id) {
        cartData[i].count = parseInt(cartData[i].count) + 1;
        w += 1;
      }
    }
    //  add new data into list
    if (w == 0) {
      var myObj = {
        id: prodData.id,
        title: prodData.name,
        count: 1,
        price: prodData.price,
        preview: prodData.preview,
      };
      cartData.push(myObj);
    }
  }
  window.localStorage.setItem("prod-list", JSON.stringify(cartData));
}

//  add to cart btn click event listner
// console.log(addBtn);
// var addBtn = $(".add_btn");
var addBtn = document.getElementById("add_btn");
console.log(addBtn);
// for()
addBtn.addEventListener("click", function (e) {
  e.preventDefault();
  var prodId = window.location.search.split("="[1]);
  console.log(prodId);
  var link = "https://5d76bf96515d1a0014085cf9.mockapi.io/product/" + prodId;

  function getDatLocStorage() {
    var req = new XMLHttpRequest();
    req.onreadystatechange = function () {
      if (this.readyState === 4) {
        if (this.status === 200) {
          var prodData = JSON.parse(this.responseText);
          console.log(prodData);
          addDataInList(prodData);
        }
      }
    };
    req.open("get", link, true);
    req.send();
  }
  cartCount();
  getDatLocStorage();
});

//  ---------Checkout-------
var cardContainer = $("#cart-item");
var amount = $("#tot-amnt");
var noOfItem = $("#no-of-items");
// console.log(cardContainer);
var myLocalStorageData = JSON.parse(window.localStorage.getItem("prod-list"));
console.log(myLocalStorageData);

function itemOnCheck(itemPrev, itemName, itemCount, itemPrice) {
  var item = $("<div class='item'></div>");
  // $(item).attr("class", "item");
  // console.log(item);

  var itemImage = $("<img></img>");
  itemImage.src = itemPrev;

  var itemDetail = $('<div class="detail"></div>');

  var itemNam = $("<h3>");
  var itemNamText = document.createTextNode(itemName);
  itemNam.append(itemNamText);

  var itemCoun = $("<p></p>");
  var itemCountext = document.createTextNode("x" + itemCount);
  itemCoun.append(itemCountext);

  var itemPri = $("<p></p>");
  var itemPriText = document.createTextNode("Amount: " + itemCount * itemPrice);
  itemPri.append(itemPriText);

  itemDetail.append(itemNam);
  itemDetail.append(itemCoun);
  itemDetail.append(itemPri);

  item.append(itemImage);
  item.append(itemDetail);

  return item;
}
if (myLocalStorageData) {
  for (var a = 0; a < myLocalStorageData.length; a++) {
    cardContainer.append(
      itemOnCheck(
        myLocalStorageData[a].preview,
        myLocalStorageData[a].title,
        myLocalStorageData[a].count,
        myLocalStorageData[a].price
      )
    );
  }
}
var cost = 0;
var counter = 0;
if (myLocalStorageData) {
  for (var b = 0; b < myLocalStorageData.length; b++) {
    counter += myLocalStorageData[b].count;
    console.log(counter);
    cost +=
      parseInt(myLocalStorageData[b].count) *
      parseInt(myLocalStorageData[b].price);
    console.log(cost);
  }
  $(amount).html(cost);
  $(noOfItem).html(counter);
}
var placeOrder = $("#order");

var placeOrder = document.getElementById("order");
// console.log(placeOrder);

placeOrder.addEventListener("click", function () {
  myLocalStorageData = window.localStorage.removeItem("prod-list");
  carCount = window.localStorage.setItem("count", "0");
  var cost = 0;
  for (var i = 0; i < myLocalStorageData.length; i++) {
    counter += myLocalStorageData[i].count;
  }
  $(amount).html(cost);
  $(noOfItem).html(counter);
});

//

//

//

//  ------------ Checkout Ends here---------

// var requestData = new XMLHttpRequest();
// requestData.open(
//   "GET",
//   "https://5d76bf96515d1a0014085cf9.mockapi.io/product",
//   true
// );
// requestData.send();
// requestData.onload = function () {
//   var jsonFile = JSON.parse(requestData.responseText);
//   console.log(jsonFile);
// };
