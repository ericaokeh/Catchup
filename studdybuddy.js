// var students = [
//     { name: "Alice", score: 90 },
//     { name: "Bob", score: 60 },
//     { name: "Charlie", score: 30 },
//     { name: "Diana", score: 80 },
//     { name: "Eve", score: 40 },
//     { name: "Frank", score: 70 },
//     { name: "Grace", score: 50 },
//     { name: "Henry", score: 20 },
//     { name: "Ivy", score: 100 },
//     { name: "Jack", score: 10 }
// ];

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

// function showQuestions() {
//     var examDiv = document.getElementById('exam');
//     examDiv.innerHTML = ''; 

//     for (var i = 0; i < questions.length; i++) {
//         var questionDiv = document.createElement('div');
//         questionDiv.className = 'question';

//         var questionText = document.createElement('p');
//         questionText.textContent = (i + 1) + ". " + questions[i].question;
//         questionDiv.appendChild(questionText);

//         var optionsDiv = document.createElement('div');
//         optionsDiv.className = 'options';

//         for (var j = 0; j < questions[i].options.length; j++) {
//             var option = document.createElement('input');
//             option.type = 'radio';
//             option.id = 'q' + i + '_o' + j;
//             option.name = 'q' + i;
//             option.value = questions[i].options[j];

//             var optionLabel = document.createElement('label');
//             optionLabel.htmlFor = option.id;
//             optionLabel.textContent = questions[i].options[j];
//             optionLabel.prepend(option);

//             optionsDiv.appendChild(optionLabel);
//         }

//         questionDiv.appendChild(optionsDiv);
//         examDiv.appendChild(questionDiv);
//     }
// }

// // Function to Add User Score and Pair Study Buddy
// function addUserScore(userName, userScore) {
//     // Add the new user to the students array
//     students.push({ name: userName, score: userScore });
//     pairStudents(userName, userScore);
// }

// // Function to Pair Students
// function pairStudents(userName, userScore) {
//     // Sort students by score in ascending order
//     var sortedStudents = [...students].sort((a, b) => a.score - b.score);
//     var userIndex = sortedStudents.findIndex(student => student.name === userName);

//     var studyBuddy;

//     if (sortedStudents.length === 1) {
//         // Only one student exists
//         studyBuddy = null;
//     } else {
//         var buddyIndex = sortedStudents.length - 1 - userIndex;

//         if (buddyIndex === userIndex) {
//             buddyIndex = (buddyIndex + 1) % sortedStudents.length;
//         }

//         studyBuddy = sortedStudents[buddyIndex];
//     }

//     displayPair(userName, userScore, studyBuddy);
// }


// function displayPair(userName, userScore, studyBuddy) {
//     var pairDisplay = document.getElementById('pair-display');
//     if (studyBuddy) {
//         pairDisplay.innerHTML = `<strong>Study Buddy Pairing:</strong><br>
//             ${userName} (${userScore}%) is paired with: ${studyBuddy.name} (${studyBuddy.score}%)`;
//     } else {
//         pairDisplay.innerHTML = `<strong>Study Buddy Pairing:</strong><br>
//             ${userName} (${userScore}%) is currently without a study buddy.`;
//     }
// }

// m
// function submitExam() {
//     var score = 0;

//     for (var i = 0; i < questions.length; i++) {
//         var selectedOption = document.querySelector('input[name="q' + i + '"]:checked');
//         if (selectedOption && compareAnswers(selectedOption.value, questions[i].answer)) {
//             score++;
//         }
//     }

//     var percent = (score / questions.length) * 100;
//     var grade = percent; 

//     var userName = prompt("Enter your name:");

//     if (userName) {
//         document.getElementById('result').innerHTML = `<strong>Your score:</strong> ${grade.toFixed(2)}%`;

//         addUserScore(userName, grade);
//     } else {
//         alert("Name is required to submit the exam.");
//     }
// }

// function compareAnswers(selected, correct) {
//     return String(selected).trim() === String(correct).trim();
// }

// showQuestions();