var inpField = document.getElementById("input-field");
var toDoBtn = document.getElementById("btn");
var toDoList = document.getElementById("to-do-list");
var ulItem = document.getElementById("my-list");

// // adding li items

toDoBtn.addEventListener("click", function () {
  // e.preventDefault();
  var list = document.createElement("li");
  var textField = document.createElement("span");
  var delIcon = document.createElement("span");
  list.classList.add("para-style");
  textField.classList.add("text");
  delIcon.classList.add("icon");
  list.appendChild(textField);
  list.appendChild(delIcon);
  ulItem.appendChild(list);
  // list.innerText = inpField.value;
  textField.innerText = inpField.value;
  delIcon.innerHTML = '<i class="fa-solid fa-trash"></i>';
  if (inpField.value === "") {
    alert("Please Enter Input");
    list.remove(textField);
  }
});

var deleteIcon = document.querySelector(".fa-solid");

deleteIcon.addEventListener("click", function () {
  var removeLi = document.querySelector(".para-style");
  var parent1 = deleteIcon.parentElement;
  var parent2 = parent1.parentElement;
  parent2.parentElement.remove(removeLi);
});

// // hiding all the list items created

var hideBox = document.getElementById("hide");

hideBox.addEventListener("click", function () {
  if (ulItem.style.display == "none") {
    ulItem.style.display = "block";
  } else {
    ulItem.style.display = "none";
  }
});

// // deleting a list

ulItem.addEventListener("click", function (e) {
  // console.log(e);
  // console.log(e.target);
  // console.log(e.target.className);
  // console.log(e.target.parentElement);

  if (e.target.className == "fa-solid fa-trash") {
    var parent = e.target.parentElement;
    var li = parent.parentElement;
    ulItem.removeChild(li);
  }
});

// console.log("Subscribe");

// var Object1 = { a: 1, b: 2, c: 3 };
// // result[a] =
// function mf(ar) {
//   var result = {};
//   var so = Object.keys(ar);
//   for (var i = 0; i < so.length; i++) {
//     result[so[i]] = ar[so[i]];
//   }
//   // return result;
//   console.log(result);
// }
// mf(Object1)
// // console.log(Object.keys(Object1));
