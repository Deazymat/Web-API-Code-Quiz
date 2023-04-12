
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
var gameIsOver = false;
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

  displayQuestion();
  startButton.style.display = "none";
});

function displayQuestion() {

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
};

function nextQuestion(event) {
  // Check if right or wrong

  if (event.target.textContent === onePieceQuestions[index].answer) {
    correctAnswers++;
  } else {
    incorrectAnswers++;
    timeLeft -= 5;
    document.getElementById("timer").textContent = timeLeft;
  }
  index++;
  if (index >= onePieceQuestions.length) {
    gameOver();
  } else {
    displayQuestion();

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
  if (gameIsOver) return;
  gameIsOver = true;
  console.log("gameOver");
  // Shows game over
  score = correctAnswers * 10;

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
  correctAnswersText.textContent = "Correct answers: " + correctAnswers;
  document.body.appendChild(correctAnswersText);

  var incorrectAnswersText = document.createElement("p");
  incorrectAnswersText.textContent = "Incorrect answers: " + incorrectAnswers;
  document.body.appendChild(incorrectAnswersText);

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

  var resetScoresButton = document.createElement("button");
  resetScoresButton.textContent = "Reset Scores";
  resetScoresButton.addEventListener("click", resetScores);
  document.body.appendChild(resetScoresButton);
  
  function resetScores() {
    localStorage.removeItem("highScores");
    displayHighScores();
  }

  var goBackButton = document.createElement("button");
  goBackButton.textContent = "Go Back";
  goBackButton.addEventListener("click", resetQuiz);
  document.body.appendChild(goBackButton);

  function resetQuiz() {
    location.reload();
  }

  var submitButton = document.createElement("input");
  submitButton.type = "submit";
  submitButton.value = "Submit";
  submitButton.id = "submitButton";
  submitButton.addEventListener("click", function () {
    var initials = initialsInput.value;
    if (initials.length > 0) {
      console.log("initials: " + initials);
      saveHighScore(initials, score);
      displayHighScores();
    }
  });
  document.body.appendChild(submitButton);


  
  function saveHighScore(initials, score) {
    var highScore = JSON.parse(localStorage.getItem("highScores")) || [];
    var newScore = {
      initials: initials,
      score: score,
    };
    highScore.push(newScore);
    highScore.sort((a, b) => b.score - a.score);
    highScore = highScore.slice(0, 5);

    localStorage.setItem("highScores", JSON.stringify(highScore));
  }

  function displayHighScores() {
    var highScores = JSON.parse(localStorage.getItem("highScores")) || [];

    // Remove the previous high scores list if it exists
    var existingList = document.getElementById("highScoresList");
    if (existingList) {
      existingList.parentNode.removeChild(existingList);
    }

    var highScoresList = document.createElement("ol");
    highScoresList.id = "highScoresList"; // Set an id for easy reference

    highScores.forEach((score) => {
      var listItem = document.createElement("li");
      listItem.textContent = `${score.initials} - ${score.score}`;
      highScoresList.appendChild(listItem);
    });

    document.body.appendChild(highScoresList);
  }


}

