// creating a Carousel with Slick ...


// End of Carousel

// Creating Clothing Container CArds Section .....

var receivedData = [];

$(document).ready(function () {
  $.ajax(
    $.get(
      "https://5d76bf96515d1a0014085cf9.mockapi.io/product",
      function (data, status) {
        if (data.length) {
          receivedData = data;
          // console.log(receivedData);
          console.log(status);
        }
        var clothCard = "";
        for (var i = 0; i < (receivedData.length = 5); i++) {
          clothCard += `
                  <a href="products.html?product_id=${receivedData[i].id}" id="${receivedData[i].id}">
                  <div class='main-card'>
                  <div class='image'>
                  <img src=${receivedData[i].preview}>
                  </div>
                  <div class='info-card'>
                  <h2>${receivedData[i].name}</h2>
                  <h4>${receivedData[i].brand}</h4>
                  <div class='free'>
                  <p>Rs. ${receivedData[i].price}</p>
                  <p>Free Delivery</p>
                  </div>
                  <div class='buy'>
                  <p>Min. 50% Off</p>
                  <button>View</button>
                  </div>
                  </div>
                  </div>
                  </a>`;
        }

        // Adding clothContainer to html page. . .
        $(clothContainer).html(clothCard);
        var clothHead = $("<h1>Fashion Top Brands</h1>");
        $(clothing).prepend(clothHead); // Prepending
      }
    )
  );
});

// Creating Accessories card Section...

$(document).ready(function () {
  $.get(
    "https://5d76bf96515d1a0014085cf9.mockapi.io/product",
    function (dat, status) {
      if (dat.length) {
        receivedData = dat;
        // console.log(receivedData);
        console.log(status);
      }
      var accessCard = "";
      for (var j = 5; j < receivedData.length; j++) {
        accessCard += `
                  <a href="products.html?product_id=${receivedData[j].id}" id="${receivedData[j].id}">
                  <div id= ${receivedData[j].id} class='main-card'>
                  <img src=${receivedData[j].preview}>
                  <div class='info-card'>
                  <h2>${receivedData[j].name}</h2>
                  <h4>${receivedData[j].brand}</h4>
                  <div class='free'>
                  <p>Rs. ${receivedData[j].price}</p>
                  <p>Free Delivery</p>
                  </div>
                  <div class='buy'>
                  <p>Upto 75% Off</p>
                  <button>View</button>
                  </div>
                  </div>
                  </div>
                  </a>`;
      }
      // Adding accessContainer to html page. . .
      $(accessContainer).html(accessCard);
      var accessHead = $("<h1>Best of Electronics</h1>");
      $(accessories).prepend(accessHead);
      // prepending accesshead
    }
  );
});

// Creating a Section for Clothing Container . . .
var clothing = $("<section id='clothing' class='cloth-section'></section>");
$("main").append(clothing);
var clothContainer = $("<div class='cloth-container'></div>");
$(clothing).append(clothContainer);

// Creating a Section for Accessories Container . . .

var accessories = $(
  "<section id='accessories' class='access-section'></section>"
);
$("main").append(accessories);
var accessContainer = $("<div class='access-container'></div>");
$(accessories).append(accessContainer);

// Creating a Single product page

$(document).ready(function () {
  function getProdDetail() {
    var id = window.location.search.split("=")[1];
    // URLSearchParams.get(urlParam);
    $.get(
      "https://5d76bf96515d1a0014085cf9.mockapi.io/product/" + id,
      function (data) {
        // for(var i=0; i<data.length; i++)
        var prodDetail = data;
        // console.log(prodDetail.photos);

        // creating a single product html page
        name = prodDetail.name;
        imgSrc = prodDetail.preview;
        brand = prodDetail.brand;
        price = prodDetail.price;
        desc = prodDetail.description;
        pic1 = prodDetail.photos[0];
        pic2 = prodDetail.photos[1];
        pic3 = prodDetail.photos[2];
        pic4 = prodDetail.photos[3];
        pic5 = prodDetail.photos[4];

        // adding data to html page ....

        function createProdPage() {
          $("#prod_img").attr("src", imgSrc);
          $("#prod_name").html(name);
          $("#prod_brand").html(brand);
          $("#price").html(price);
          $("#desc").html(desc + ".");
          $("#img0").attr("src", pic1);
          $("#img1").attr("src", pic2);
          $("#img2").attr("src", pic3);
          $("#img3").attr("src", pic4);
          $("#img4").attr("src", pic5);
        }
        createProdPage();
      }
    );

    // var left = $(".left_col img");
    var left = document.querySelector(".left_col img");
    // console.log(left.src);
    var right = document.querySelectorAll(".prev_img img");
    // console.log(right);

    // Adding Event on small image Click . . .
    for (var s = 0; s < right.length; s++) {
      right[s].addEventListener("click", function () {
        left.src = this.src;
        // console.log(this);
        for (var t = 0; t < right.length; t++) {
          right[t].classList.remove("active");
        }
        this.classList.add("active");
      });
    }
  }
  getProdDetail();
});

// var dataStored = JSON.parse(localStorage.getItem("list", "[]"));

// console.log(dataStored);

//  Add to Cart page starts here....

var addCart = $(".add_btn");
// console.log(addCart);
var showCart = $(".count");

var allProducts = [];

for (var i = 0; i < addCart.length; i++) {
  addCart[i].addEventListener("click", function () {
    // e.preventDefault();
    // cartCount();
    // console.log(
    //   this.parentElement.parentElement.children[0].children[0].innerHTML
    // );
    var product = {
      image:
        this.parentElement.parentElement.children[0].children[5].children[1]
          .children[0].src,
      name: this.parentElement.parentElement.children[0].children[0].innerText,
      price:
        this.parentElement.parentElement.children[0].children[2].children[0]
          .innerText,
      totalPrice: parseInt(
        this.parentElement.parentElement.children[0].children[2].children[0]
          .innerText
      ),
      quantity: 1,
    };
    addItemToLocalStorage(product);
  });
}

// adding items to local storage

function addItemToLocalStorage(product) {
  var cartItem = JSON.parse(localStorage.getItem("productInCart"));
  console.log(cartItem);
  if (cartItem === null) {
    allProducts.push(product);
    localStorage.setItem("productInCart", JSON.stringify(allProducts));
    // console.log(cartItem);
  } else {
    for (var i = 0; i < cartItem.length; i++) {
      if (product.name === cartItem[i].name) {
        product.quantity += cartItem[i].quantity;
        product.totalPrice = cartItem[i].totalPrice += product.totalPrice;
        // product.totalPrice = cartItem[i].totalPrice += product.totalPrice;
      } else {
        allProducts.push(cartItem[i]);
      }
    }
    allProducts.push(product);
  }
  localStorage.setItem("productInCart", JSON.stringify(allProducts));
  window.location.reload();
  // console.log(product);
}

function displayCartItem() {
  var cartList = "";
  var tot = 0;
  var cartItem = JSON.parse(localStorage.getItem("productInCart"));

  // console.log(cartItem);
  for (var j = 0; j < cartItem.length; j++) {
    cartList += `
                <div class='check-out'>
                  
                  <div class='cart-list'>
                    <div class='image'>
                      <img src=${cartItem[j].image}>
                    </div>
                    <div class='text'>
                      <h2>${cartItem[j].name}</h2>
                      <h4>x${cartItem[j].quantity}</h4>
                      <h3>Amount: ${cartItem[j].totalPrice}
                    </div>
                  </div>
                </div>
                `;
    tot += cartItem[j].totalPrice;
  }
  $(".tot").append(tot);
  console.log(cartList);
  $(".cart-card").append(cartList);
}

displayCartItem();

function displayCartCount() {
  var initialCartCount = 0;
  var cartItem = JSON.parse(localStorage.getItem("productInCart"));
  for (var k = 0; k < cartItem.length; k++) {
    initialCartCount += cartItem[k].quantity;
  }
  console.log(initialCartCount);
  $(showCart).text(initialCartCount);
}

displayCartCount();

var placeOrder = $(".order-btn");
for (var p = 0; p < placeOrder.length; p++) {
  placeOrder[p].addEventListener("click", function () {
    localStorage.removeItem("productInCart");
    $.post("https://5d76bf96515d1a0014085cf9.mockapi.io/order", productInCart),
      function () {
        alert("Order Placed Successfullly");
        sessionStorage.setItem("productInCart", []);
        location.assign("./html/confirm.html");
      };
  });
}

// function cartCount() {
//   var prodCount = localStorage.getItem("cartCount");
//   prodCount = parseInt(prodCount);
//   // console.log(typeof prodCount);

//   if (prodCount) {
//     localStorage.setItem("cartCount", prodCount + 1);
//     $(showCart).text(prodCount + 1);
//     // showCart.textContent = prodCount + 1;
//   } else {
//     localStorage.setItem("cartCount", 1);
//     $(showCart).text((prodCount = 1));
//     // showCart.textContent = prodCount = 1;
//   }
// }

// function displayCart() {
//   var prodCount = localStorage.getItem("cartCount");
//   if (prodCount) {
//     $(showCart).text(prodCount);
//   }
// }

// displayCart();
