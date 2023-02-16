console.log(
  " A student will not be allowed to sit in the exam if his/her attendance is less than 75%. if he/she has medical causes reduce attendance criteria to 60%. Ask the user if he/she has a medical cause or not ( 'Y' or 'N' ) and print accordingly. You were given a total no classes and total classes attended by the student. "
);

var totClasses = 250;
console.log("Total Classes : " + totClasses);
var attendedClasses = 200;
console.log("Total Classes Attended: " + attendedClasses);
var percentage = (attendedClasses / totClasses) * 100;
console.log("Your attendance percentage is: " + percentage + "%");

if (percentage < 75) {
  var choice = prompt(
    "Do you have any medical cause? If Yes type 'Y' otherwise type 'N' "
  );
  if ((choice >= "a" && choice <= "z") || (choice >= "A" && choice <= "Z")) {
    switch (choice) {
      case "Y":
        console.log("Y");
        console.log("Medical cause is accepted, you can sit in the Exam");
        // console.log('True');
        break;
      case "N":
        console.log("N");
        console.log(
          "Low attendance percentage. You are not allowed to sit in the Exam."
        );
        // console.log('False');
        break;
      case "y":
        console.log("y");
        console.log("Medical cause is accepted, you can sit in the Exam");
        // console.log('True');
        break;
      case "n":
        console.log("n");
        console.log(
          "Low attendance percentage. You are not allowed to sit in the Exam."
        );
        // console.log('False');
        break;
      default:
        console.log("Please provide correct input");
    }
  }
} else {
  console.log("Good attendance percentage. You can sit in the Exam.");
  // console.log('True');
}
