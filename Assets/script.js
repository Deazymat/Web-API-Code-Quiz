// AS A coding boot camp student
// I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
// SO THAT I can gauge my progress compared to my peers

// ## Acceptance Criteria

// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score
// Who is the main character in One Piece = Luffy
// Who is the Navigator in One piece = Nami
// Who is the Doctor in One piece = Chopper
// WHo is the Swordsmen in One piece = Zoro
// who is the newest crewmate to the straw hats in one piece jimbei
// who is the cook for the straw hats = sanji

var startButton = document.getElementById("startButton");

var characters = ["Luffy", "Nami", "Chopper", "Zoro", "Jimbei", "Sanji"];
var button1 = document.getElementById("choice1");
var button2 = document.getElementById("choice2");
var button3 = document.getElementById("choice3");
var button4 = document.getElementById("choice4");

var question = document.getElementById("question");
var index = 0;
var score = 0;
var correctAnswers = 0;
var incorrectAnswers = 0;
// added score
var onePieceQuestions = [
  {
    question: "Who is the main character in One Piece?",
    options: ["Luffy", "Nami", "Chopper", "Zoro"],
    answer: "Luffy",
  },
  {
    question: "Who is the Navigator in One piece?",
    options: ["Luffy", "Nami", "Chopper", "Zoro"],
    answer: "Nami",
  },
  {
    question: "Who is the Doctor in One piece?",
    options: ["Luffy", "Nami", "Chopper", "Zoro"],
    answer: "Chopper",
  },
  {
    question: "Who is the Swordsmen in One piece?",
    options: ["Luffy", "Nami", "Chopper", "Zoro"],
    answer: "Zoro",
  },
  {
    question: "Who is the newest crewmate to the straw hats in one piece?",
    options: ["Luffy", "Nami", "Jimbei", "Zoro"],
    answer: "Jimbei",
  },
  {
    question: "Who is the cook for the straw hats?",
    options: ["Luffy", "Sanji", "Chopper", "Zoro"],
    answer: "Sanji",
  },
];
var timeLeft = 30;
startButton.addEventListener("click", function (event) {
  console.log("Hello");
  var downloadTimer = setInterval(function () {
    if (timeLeft <= 0) {
      gameOver();
      clearInterval(downloadTimer);
    }
    document.getElementById("timer").textContent = timeLeft;
    timeLeft -= 1;
  }, 1000);

  var currentQuestion = onePieceQuestions[index];
  question.textContent = currentQuestion.question;
  button1.textContent = currentQuestion.options[0];
  button1.addEventListener("click", nextQuestion);
  button2.textContent = currentQuestion.options[1];
  button2.addEventListener("click", nextQuestion);
  button3.textContent = currentQuestion.options[2];
  button3.addEventListener("click", nextQuestion);
  button4.textContent = currentQuestion.options[3];
  button4.addEventListener("click", nextQuestion);

  startButton.style.display = "none";
});

function nextQuestion(event) {
  // Check if right or wrong
  console.log(event.target.textContent);
  if (event.target.textContent == onePieceQuestions[index].answer) {
    console.log("correct");
  } else {
    timeLeft -= 5;
    document.getElementById("timer").textContent = timeLeft;
    console.log("incorrect");
  }
  index++;
  if (index >= onePieceQuestions.length) {
    gameOver();
  } else {
    console.log("Hello");
    var currentQuestion = onePieceQuestions[index];
    question.textContent = currentQuestion.question;
    button1.textContent = currentQuestion.options[0];
    button1.addEventListener("click", nextQuestion);
    button2.textContent = currentQuestion.options[1];
    button2.addEventListener("click", nextQuestion);
    button3.textContent = currentQuestion.options[2];
    button3.addEventListener("click", nextQuestion);
    button4.textContent = currentQuestion.options[3];
    button4.addEventListener("click", nextQuestion);

  }
}

function gameOver() {
  // Shows game over
  console.log("gameOver");

  // Hiding questions and answers
  question.style.display = "none";
  button1.style.display = "none";
  button2.style.display = "none";
  button3.style.display = "none";
  button4.style.display = "none";


  var gameOverText = document.createElement("h2");
  gameOverText.textContent = "Game Over";
  document.body.appendChild(gameOverText);

  var correctAnswersText = document.createElement("p");
  correctAnswersText.textContent = "Correct answers:" + correctAnswers;
  document.body.appendChild(correctAnswersText);

  var incorrectAnswersText = document.createElement("p");
  incorrectAnswersText.textContent = "Incorrect answers:" + incorrectAnswers;
  document.body.appendChild(incorrectAnswers);

  var scoreText = document.createElement("p");
  scoreText.textContent = "Your score: " + score;
  document.body.appendChild(scoreText);

  var initialsLabel = document.createElement("label");
  initialsLabel.textContent = "Enter your initials: ";
  document.body.appendChild(initialsLabel);

  var initialsInput = document.createElement("input");
  initialsInput.type = "text";
  initialsInput.maxLength = "4";
  initialsInput.id = "initialsInput";
  document.body.appendChild(initialsInput);

  // creating input field for initials
  var submitButton = document.createElement("input");
  submitButton.type = "submit";
  submitButton.value = "submit";
  submitButton.id = "submitButton";
  submitButton.addEventListener("click", function () {
    var initials = initialsInput.value;
    if (initials.length > 0) {
      console.log("initials:" + initials);
    }
  });
}
// show score and hide questions and answers
// show a input to show their ints.
// when they type their ints. and submit saved to local storage.
