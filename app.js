
const startButton = document.getElementById('start-button');
const questionContainer = document.getElementById('divId');
const questionEl = document.getElementById('question-bar');
const answerEl = document.querySelectorAll('.answer');
const resetGame = document.getElementById('reset-button');

let counter = 0;
let timer;
let score = 0;
startButton.addEventListener('click', startQuiz);
resetGame.addEventListener('click', reset);

function startQuiz() {
    startButton.classList.add('hide');
    questionContainer.classList.remove('hide');
    setNextQuestion();
}

function setNextQuestion() {
    if (counter < questions.length) {
    answerEl.forEach(el => {
        el.style.backgroundColor = 'yellow'
    })
    showQuestion();
    startTimer();
    } else {
        questionContainer.classList.add('hide');
        resetGame.classList.remove('hide');
    }
}

function showQuestion(questionBar) {
    questionEl.innerText = questions[counter].question
    answerEl[0].innerText = questions[counter].answers.a
    answerEl[1].innerText = questions[counter].answers.b
    answerEl[2].innerText = questions[counter].answers.c
    answerEl[3].innerText = questions[counter].answers.d
}

function startTimer() {
    timer = setTimeout(() => {
    counter++;
    setNextQuestion(); 
    }, 10000);
}

answerEl.forEach(el => {
    el.addEventListener('click', (e) => {
        clearTimeout(timer);
        selectAnswer(e);
});
})

function reset() {
    location.reload();
}

const questions = [
    {
        question: 'What is the largest country in the world?',
    answers: {
        a: 'USA',
        b: 'Russia',
        c: 'China',
        d: 'India'
    },
    correctAnswer: 'b'
},
    {
        question: 'What country has the largest population?',
    answers: {
        a: 'USA',
        b: 'Russia',
        c: 'China',
        d: 'India'
    },
    correctAnswer: 'd'
},
    {
        question: 'How many continents are there?',
    answers: {
        a: '6',
        b: '7',
        c: '8',
        d: '5'
    },
    correctAnswer: 'b'
},
    {
        question: 'How many states does USA have?',
    answers: {
        a: '50',
        b: '49',
        c: '51',
        d: '43'
    },
    correctAnswer: 'a'
},
    {
        question: 'How many countries are there in UK?',
    answers: {
        a: '3',
        b: '4',
        c: '5',
        d: '6'
    },
    correctAnswer: 'b'
},
]
score = '#spanScore';

function selectAnswer(e) {
    let userAnswer = e.target.id;
    let button = e.target
    if (userAnswer === questions[counter].correctAnswer) {
        button.style.backgroundColor = 'green'
        score++;
    } else {
        button.style.backgroundColor = 'red'
    }


    counter++;
    setTimeout(() => setNextQuestion(), 3500)
}