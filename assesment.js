// var questions = [
//     { question: "16 / 2", options: [32, 0, 8, 2], answer: 8 },
//     { question: "36 * 36", options: [92, 1296, 2341, 1356], answer: 1296 },
//     { question: "19 + 28", options: [47, 37, 48, 247], answer: 47 },
//     { question: "2 / 16", options: [0.025, 0.5, 8, "1/4"], answer: "1/4" },
//     { question: "2^0", options: [0, 1, "1/2", 2], answer: 1 },
//     { question: "1 * 0 * 22 * 51", options: [1122, 0, 73, 117], answer: 0 },
//     { question: "16 * 0", options: [32, 0, 8, 2], answer: 0 },
//     { question: "12 + 0 + 13", options: [32, 0, 8, 25], answer: 25 },
//     { question: "2.3 * 3.4", options: [6, -1.1, 7.8, 5.7], answer: 7.8 },
//     { question: "12^2", options: [48, 24, 144, 6], answer: 144 }
// ];

// var scoreRecords = {};

// function showQuestions() {
//     var examDiv = document.getElementById('exam');

//     for (var i = 0; i < questions.length; i++) {
//         var questionDiv = document.createElement('div');
//         var questionText = document.createElement('p');
//         questionText.textContent = questions[i].question;
//         questionDiv.appendChild(questionText);

//         for (var j = 0; j < questions[i].options.length; j++) {
//             var option = document.createElement('input');
//             option.type = 'radio';
//             option.name = 'q' + i;
//             option.value = questions[i].options[j];

//             var optionLabel = document.createElement('label');
//             optionLabel.textContent = questions[i].options[j];
//             optionLabel.prepend(option);

//             questionDiv.appendChild(optionLabel);
//         }

//         examDiv.appendChild(questionDiv);
//     }
// }

// function addUserScore(name, score) {
//     scoreRecords[name] = score;
//     displayScores();
// }

// function submitExam() {
//     var score = 0;

//     for (var i = 0; i < questions.length; i++) {
//         var selectedOption = document.querySelector('input[name="q' + i + '"]:checked');
//         if (selectedOption && selectedOption.value == questions[i].answer) {
//             score++;
//         }
//     }

//     var percent = (score / questions.length) * 100;
//     var grade = percent; 

//     var userName = prompt("Enter your name:");

//     if (userName) {
//         document.getElementById('result').textContent = "Your score: " + grade.toFixed(2) + "%";
//         addUserScore(userName, grade);
//     }
// }

// function displayScores() {
//     var scoreList = "Current Score Records:<br>";
//     for (var name in scoreRecords) {
//         scoreList += name + ": " + scoreRecords[name].toFixed(2) + "%<br>";
//     }

//     document.getElementById('result').innerHTML += "<br>" + scoreList;
// }

// showQuestions();