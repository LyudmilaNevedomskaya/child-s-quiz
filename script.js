const allQuestions = [
  {
    question: 'How many legs does a spider have??',
    answer: 'Nine',
    answer2: 'Eight',
    answer3: 'Ten',
    answer4: 'Six',
    rightAnswer: 'eight'
  },
  {
    question: 'What is the name of the toy cowboy in Toy Story?',
    answer: 'Woody',
    answer2: 'Andy',
    answer3: 'Buzz Lightyear',
    answer4: 'Sandy',
    rightAnswer: 'woody'
  },
  {
    question: 'What colors are the stars on the American flag?',
    answer: 'Gold',
    answer2: 'Red',
    answer3: 'Blue',
    answer4: 'White',
    rightAnswer: 'white'
  },
  {
    question: 'How many planets are in our solar system?',
    answer: 'Nine',
    answer2: 'Eleven',
    answer3: 'Eight',
    answer4: 'Ten',
    rightAnswer: 'eight'
  },
  {
    question: 'Where does Santa Claus live?',
    answer: 'The South Pole',
    answer2: 'The North Pole',
    answer3: 'Antarctica',
    answer4: 'Alaska',
    rightAnswer: 'the north pole'
  },
  {
    question: 'What do caterpillars turn into?',
    answer: 'Dragonfly',
    answer2: 'Birds',
    answer3: 'Grasshoppers',
    answer4: 'Butterflies',
    rightAnswer: 'butterflies'
  },
  {
    question: 'How many pairs of wings do bees have?',
    answer: 'One',
    answer2: 'Two',
    answer3: 'Three',
    answer4: 'Four',
    rightAnswer: 'two'
  },
  {
    question: 'How many days are in a year?',
    answer: '365',
    answer2: '355',
    answer3: '345',
    answer4: '367',
    rightAnswer: '365'
  },
  {
    question: 'How many sides does a triangle have?',
    answer: 'Three',
    answer2: 'Four',
    answer3: 'Five',
    answer4: 'Six',
    rightAnswer: 'three'
  },
  {
    question: 'How many colors are in a rainbow?',
    answer: 'Five',
    answer2: 'Six',
    answer3: 'Seven',
    answer4: 'Eight',
    rightAnswer: 'seven'
  },
  {
    question: 'Which country is home to the kangaroo?',
    answer: 'Australia',
    answer2: 'Africa',
    answer3: 'America',
    answer4: 'Asia',
    rightAnswer: 'australia'
  },
  {
    question: 'What food do pandas eat?',
    answer: 'Warms',
    answer2: 'Fish',
    answer3: 'Bamboo',
    answer4: 'Insects',
    rightAnswer: 'bamboo'
  },
  {
    question: 'How many bones do sharks have?',
    answer: 'Zero',
    answer2: 'Twenty-five',
    answer3: 'Fifty-two',
    answer4: 'Twenty',
    rightAnswer: 'zero'
  },
  {
    question: 'Can you name the closest star to Earth?',
    answer: 'Mercury',
    answer2: 'The sun',
    answer3: 'Mars',
    answer4: 'Venus',
    rightAnswer: 'the sun'
  },
  {
    question: 'What is the largest continent?',
    answer: 'Asia',
    answer2: 'Africa',
    answer3: 'North America',
    answer4: 'Australia',
    rightAnswer: 'asia'
  },
  {
    question: 'How many sides does an Octagon have?',
    answer: 'Five',
    answer2: 'Six',
    answer3: 'Seven',
    answer4: 'Eight',
    rightAnswer: 'eight'
  },
  {
    question: 'How many days in a week?',
    answer: '5',
    answer2: '6',
    answer3: '7',
    answer4: '8',
    rightAnswer: '7'
  },
  {
    question: 'Which direction does the Sun rise from?',
    answer: 'North',
    answer2: 'South',
    answer3: 'West',
    answer4: 'East',
    rightAnswer: 'east'
  },
  {
    question: 'Who is the king of Greek gods?',
    answer: 'Poseidon',
    answer2: 'Zeus',
    answer3: 'Hermes',
    answer4: 'Demeter',
    rightAnswer: 'zeus'
  },
  {
    question: 'What is the capital of canada?',
    answer: 'Vancouver',
    answer2: 'Toronto',
    answer3: 'Calgary',
    answer4: 'Ottawa',
    rightAnswer: 'ottawa'
  }
];

let nextQuestion = 0;
let answers = [];
let user = '';
let selectValue;
let questions = [];

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
    
    for (let i = 0; i < selectValue; i++) {
      arrayOfRandomQuestions();
    };
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

  questions.push(allQuestions[result]);

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


