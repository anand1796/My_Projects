// https://5d76bf96515d1a0014085cf9.mockapi.io/quiz

var formQuestions = [
  {
    id: 1,
    answer: 3,
    question: "Which was not one of Voldemort's Horcruxes?",
    options: ["Harry", "Nagini", "Helga's Diadem", "Tom Riddle's Diary"],
  },
  {
    id: 2,
    answer: 1,
    question: "Which of these are not one of Hagrid's many pets?",
    options: ["Grawp", "Fluffy", "Aragog", "Noberta"],
  },
  {
    id: 3,
    answer: 3,
    question: "Which class did Severus Snape always want to teach?",
    options: [
      "Potions",
      "Charms",
      "Defense Against Dark Arts",
      "Transfiguration",
    ],
  },
  {
    id: 4,
    answer: 3,
    question: "Which Hogwarts house did Moaning Myrtle belong in?",
    options: ["Gryffindor", "Slytherin", "Ravenclaw", "Hufflepuff"],
  },
  {
    id: 5,
    answer: 2,
    question: "What class did Neville end up teaching at Hogwarts?",
    options: ["Astronomy", "Herbology", "Charms", "Muggle Studies"],
  },
];

var formData = document.getElementById("form-data");
var data = "";

var a = 0;

for (var i = 0; i < formQuestions.length; i++) {
  //   let data = "";
  data += `<div class="question">
            <label>
                Q.${formQuestions[i].id}
                ${formQuestions[i].question}
            </label>
            <br>
            <ul class="list">
            <li>
            <label>
            <input type="radio" name="radio${+formQuestions[i]
              .id}" value="1" class="answer" id="ans1">
            ${formQuestions[i].options[0]}
            </label>
            </li>
            <li>
            <label>
            <input name="radio${+formQuestions[i]
              .id}" type="radio" value="2" class="answer" id="ans2">
            ${formQuestions[i].options[1]}
            </label>
            </li>
            <li>
            <label>
            <input type="radio" name="radio${+formQuestions[i]
              .id}" value="3" class="answer" id="ans3">
            ${formQuestions[i].options[2]}
            </label>
            </li>
            <li>
            <label>
            <input type="radio" name="radio${+formQuestions[i]
              .id}" value="4" class="answer" id="ans4">
            ${formQuestions[i].options[3]}
            </label>
            </li>
            </ul>
            <hr>
            </div>
            `;
}
// console.log(data);
formData.innerHTML =
  data + '<div class="btn"><button id="btn">Submit</button></div>';

var btn = document.getElementById("btn");
var inputs = document.querySelectorAll("li input");
var ulList = document.querySelectorAll("li label");

console.log(inputs.value);
// console.log(formData.radio1.value);

var ans = document.querySelectorAll(".answer");
// console.log(ans);

var quest = document.querySelectorAll(".question");
// console.log(quest);

var allAnswers = [];

var totScore = document.querySelector(".tot-score");
for (var i = 0; i < formQuestions.length; i++) {
  allAnswers.push(formQuestions[i].answer);
}
// console.log(allAnswers);
var score = 0;
formData.addEventListener("submit", function (e) {
  e.preventDefault();
  var selAnswers = [
    formData.radio1.value,
    formData.radio2.value,
    formData.radio3.value,
    formData.radio4.value,
    formData.radio5.value,
  ];

  // console.log(formData.radio1);
  for (var i = 0; i < 5; i++) {
    if (selAnswers[i] == allAnswers[i]) {
      score++;
    }
    // console.log(selAnswers);
  }
  // console.log(score);
  totScore.innerText = `${score}/5`;

  // document.getElementById("ans1").value = "";
  // formData.reset();

  for (i = 0; i < inputs.length; i++) {
    inputs[i].value = "";
    console.log(inputs[i].value);
  }
  console.log(inputs.value);

  // inputs.forEach((input) => (input.value = ""));

  // formData.request(score);
});

// console.log(formData);
