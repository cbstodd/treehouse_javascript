//
// var playlist = [
//   ['One more time', 'Earthtone'],
//   ['Twilite', 'Earthtone'],
//   ['Divided Sky', 'Phish']
// ]
//
// function printSongs( list ) {
//   var listHTML = '<ol class="list-group">';
//   for (var i = 0; i < list.length; i++) {
//     listHTML += '<li class="list-group-item list-group-item-info">The song \"' + list[i][0] + "\" is by: " + list[i][1] + '</li>';
//   }
//   listHTML += '</ol>';
//   print(listHTML);
// }
//
// function print( html ) {
//   document.write( html );
// }
// printSongs(playlist);
//
//
// var questions = [{
// 	question: "What is your favorite NFL team?",
// 	answer: "Ravens"
// }, {
// 	question: "Where did you go to high school?",
// 	answer: "St Marys"
// }, {
// 	question: "How old are you?",
// 	answer: 31
// }];
//
// var correctAnswer = 0;
// var answer;
// var qustion;
// var response;
// var correct = [];
// var wrong = [];
//
// function print(html) {
// 	//Prints the answer to the output id.
// 	var outputDiv = document.getElementById('output');
// 	outputDiv.innerHTML = html;
// }
//
// function buildList(array) {
// 	var listHTML = "<ul class='list-group'>";
// 	for (var i = 0; i < array.length; i += 1) {
// 		listHTML = "<li>" + array[i] + "</li>";
// 	}
// 	listHTML = "</ul>";
// 	return listHTML;
// }
//
// for (var i = 0; i < questions.length; i += 1) {
// 	question = questions[i].question;
// 	answer = questions[i].answer;
// 	response = prompt(question);
// 	if (response === answer) {
// 		correctAnswer += 1;
// 		correct.push(question);
// 	} else {
// 		wrong.push(question);
// 	}
// }
//
// html = "You got " + correctAnswer + " questions right.";
// html += "<h4>You got these answer correct</h4>";
// html += buildList(correct);
// html += "<h4>You go these answer wrong</h4>";
// html += buildList(wrong);
// print(html);
