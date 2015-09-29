// // var person = {
// //   first_name: 'Colin',
// //   last_name: 'Stodd',
// //   age: 31,
// //   state: 'Maryland',
// //   country: 'United States',
// //   treehouse_student: true,
// //   skills: ['Ruby', 'Rails', 'HTML', 'CSS', 'JavaScript']
// // };
//
// // //Prints to output id.
// // function print( message ) {
// //   var div = document.getElementById('output');
// //   div.innerHTML = message;
// // }
// //
// // var message = "My first name is " + person.first_name + "<br>";
// // message += "My last name is " + person.last_name + "<br>";
// // message += "My skill-set is : " + person.skills;
//
// // print( message );
//
// // //For in loop.
// // for (key in person) {
// //   console.log(key);
// // }
//

//Array Literal for loop quesiton game.
// var questions = [{
// 	question: "How many states are in the USA?",
// 	answer: 50
// }, {
// 	question: "How old are you?",
// 	answer: 31
// }, {
// 	question: "What is your favorite NFL team?",
// 	answer: "Ravens"
// }];
//
// var correctAnswers = 0;
// var qustion;
// var answer;
// var response;
// var correct = [];
// var wrong = [];
//
// function print(message) {
// 	var div = document.getElementById('output');
// 	div.innerHTML = message;
// }
//
// for (var i = 0; i < questions.length; i += 1) {
// 	question = questions[i].question;
// 	answer = questions[i].answer;
// 	response = prompt(question);
// 	if (response === answer) {
// 		correctAnswers += 1;
// 		correct.push(question);
// 	} else {
// 		wrong.push(question);
// 	}
// }
//
// var message = "<p class='list-group-item-danger'>You got " + correctAnswers + " questions right.</p>";
//
// print(message);


//Print Data Structures To The Page.
//Data is in the Data.js file.

var message = '';
var student;

function print( message ) {
	var div = document.getElementById('output');
	div.innerHTML = message;
}

for (var i = 0; i < students.length; i += 1) {
	var student = students[i];
  message += "<ul class='list-group-item' style='list-style-type:none;'>";
  message += "<li >Student: " + student.name + "</li>";
	message += "<li >Track: " + student.track + "</li>";
	message += "<li >Achievements: " + student.achievements + "</li>";
 	message += "<li >Points: " + student.points + "</li>";
  message += "</ul>";
}
print(message);
