const greeting = document.getElementById('greeting');
const userName = document.getElementById('user-name');
const start = document.getElementById('start');
const questionField = document.getElementById('question-field');
const question = document.getElementById('question');

const selectQuestionChoose = document.getElementById('questions-choose');
// const fiveQuestions = document.getElementById('five');
// const tenQuestions = document.getElementById('ten');
// const fifteenQuestions = document.getElementById('fifteen');
// const twentyQuestions = document.getElementById('twenty');

const userAnswer1 = document.getElementById('input1');
const userAnswer2 = document.getElementById('input2');
const userAnswer3 = document.getElementById('input3');
const userAnswer4 = document.getElementById('input4');
const answ1 = document.getElementById('answ1');
const answ2 = document.getElementById('answ2');
const answ3 = document.getElementById('answ3');
const answ4 = document.getElementById('answ4');
//const rates = document.getElementById('rates');
const finishSuccess = document.getElementById('finish-success');
const finishFailed = document.getElementById('finish-failed');
const form = document.getElementById("form");
const showAnswers = document.getElementById("show-answers");

let nextQuestion = 0;
let answers = [];
let user = '';
let selectValue;
let questions = [];


//////PREVENT PAGE REFRESH ON FORM SUBMIT//////
function handleForm(event) { event.preventDefault(); }
form.addEventListener('submit', handleForm);

//////START QUIZ//////
start.addEventListener('click', () => {
  /////user choose how many questions to answer 5,10,15 or 20////
  selectValue = selectQuestionChoose.options[selectQuestionChoose.selectedIndex].value;
  console.log(selectValue);

  user = userName.value.toUpperCase();
  if (user === '') {
    alert('Enter your name');
  } else {
    greeting.classList.add('hide');
    document.body.className = 'start-background';
    questionField.classList.remove('hide');
    start.classList.add('hide');
    finishSuccess.classList.add('hide');
    finishFailed.classList.add('hide');
    nextQuestion = 0;
    questions = [];
    answers = [];
    //userAnswer.value = '';
    
    do {
      arrayOfRandomQuestions();
    } while (questions.length < selectValue);

    console.log(questions);
    question.innerText = questions[nextQuestion].question;
    radioAnswers();
    // userAnswer1.value = questions[nextQuestion].answer;
    // userAnswer2.value = questions[nextQuestion].answer2;
    // userAnswer3.value = questions[nextQuestion].answer3;
    // userAnswer4.value = questions[nextQuestion].answer4;

    // userAnswer1.checked = false;
    // userAnswer2.checked = false;
    // userAnswer3.checked = false;
    // userAnswer4.checked = false;

    // answ1.innerText = questions[nextQuestion].answer;
    // answ2.innerText = questions[nextQuestion].answer2;
    // answ3.innerText = questions[nextQuestion].answer3;
    // answ4.innerText = questions[nextQuestion].answer4;

  }
});


//////QUIZ CYCLE//////
function enteredData() {
  let boxvalue = form.elements['rads'].value.toLowerCase();
  //console.log(boxvalue);

  if (questions.length === (nextQuestion + 1)) {
    answers.push(boxvalue);
    questionField.classList.add('hide');

    if (checkAnswers(answers) === questions.length) {
      finishSuccess.classList.remove('hide');
      document.body.className = 'win-background';
      finishSuccess.innerHTML = `
        <h2>CONGRATS ${user}, YOU WIN!!!</h2>
        <p>Your score is ${checkAnswers(answers)} from ${questions.length}!</p>`;
    } else if (checkAnswers(answers) !== questions.length) {
      finishFailed.classList.remove('hide');
      document.body.className = 'lose-background';
      finishFailed.innerHTML = `
        <p>Your score is ${checkAnswers(answers)} from ${questions.length}!</p>
        <h2>Try again ${user}!!!</h2>`;
    }
    start.classList.remove('hide');
  } else {
    nextQuestion++;
    answers.push(boxvalue);
    question.innerText = questions[nextQuestion].question;

    radioAnswers();
    // userAnswer1.value = questions[nextQuestion].answer;
    // userAnswer2.value = questions[nextQuestion].answer2;
    // userAnswer3.value = questions[nextQuestion].answer3;
    // userAnswer4.value = questions[nextQuestion].answer4;

    // userAnswer1.checked = false;
    // userAnswer2.checked = false;
    // userAnswer3.checked = false;
    // userAnswer4.checked = false;

    // answ1.innerText = questions[nextQuestion].answer;
    // answ2.innerText = questions[nextQuestion].answer2;
    // answ3.innerText = questions[nextQuestion].answer3;
    // answ4.innerText = questions[nextQuestion].answer4;


  }

  //console.log(answers);
  // console.log(nextQuestion);
  //console.log(answ1);
  //console.log(userAnswer1.textContent);
};

//////UPDATE ANSWERS VALUE//////
function radioAnswers() {
  userAnswer1.value = questions[nextQuestion].answer;
  userAnswer2.value = questions[nextQuestion].answer2;
  userAnswer3.value = questions[nextQuestion].answer3;
  userAnswer4.value = questions[nextQuestion].answer4;

  userAnswer1.checked = false;
  userAnswer2.checked = false;
  userAnswer3.checked = false;
  userAnswer4.checked = false;

  answ1.innerText = questions[nextQuestion].answer;
  answ2.innerText = questions[nextQuestion].answer2;
  answ3.innerText = questions[nextQuestion].answer3;
  answ4.innerText = questions[nextQuestion].answer4;
}

//////GET RANDOM QUESTION//////
function getRandomQuestion() {
  const random = Math.floor(Math.random() * (allQuestions.length - 1));
  console.log(random);
  return random;
}

/////get array of random questions//////
function arrayOfRandomQuestions() {
  const result = getRandomQuestion();
  if (!questions.includes(allQuestions[result])) {
    questions.push(allQuestions[result]);
  }
}



//////CHECK CORRECT ANSWERS//////
function checkAnswers(arr) {
  let score = 0;
  for (let i = 0; i < questions.length; i++) {
    if (arr[i] === questions[i].rightAnswer) {
      score++;
    }
  }
  return score;
}

