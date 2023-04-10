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
var onePieceQuestions = [
  {
    question: "Who is the main character in One Piece?",
    options: ["Luffy", "Nami", "Chopper", "Zoro"],
    answer: 0,
  },
  {
    question: "Who is the Navigator in One piece?",
    options: ["Luffy", "Nami", "Chopper", "Zoro"],
    answer: 0,
  },
  {
    question: "Who is the Doctor in One piece?",
    options: ["Luffy", "Nami", "Chopper", "Zoro"],
    answer: 0,
  },
  {
    question: "Who is the Swordsmen in One piece?",
    options: ["Luffy", "Nami", "Chopper", "Zoro"],
    answer: 0,
  },
  {
    question: "Who is the newest crewmate to the straw hats in one piece?",
    options: ["Luffy", "Nami", "Chopper", "Zoro"],
    answer: 0,
  },
  {
    question: "Who is the cook for the straw hats?",
    options: ["Luffy", "Nami", "Chopper", "Zoro"],
    answer: 0,
  },
];
startButton.addEventListener("click", function () {
  console.log("Hello");
  var currentQuestion = onePieceQuestions[index];
  question.textContent = currentQuestion.question;
  button1.textContent = currentQuestion.options[0];
  button2.textContent = currentQuestion.options[1];
  button3.textContent = currentQuestion.options[2];
  button4.textContent = currentQuestion.options[3];
});
