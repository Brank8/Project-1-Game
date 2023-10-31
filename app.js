
const startButton = document.getElementById('start-button');
const questionContainer = document.getElementById('divId');
const questionEl = document.getElementById('question-bar')
const answerEl = document.querySelectorAll('.answer')

let counter = 0;

startButton.addEventListener('click', startQuiz)

function startQuiz() {
    startButton.classList.add('hide')
    questionContainer.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    showQuestion()
}

function showQuestion(questionBar) {
    questionEl.innerText = questions[counter].question
    answerEl[0].innerText = questions[counter].answers.a
    answerEl[1].innerText = questions[counter].answers.b
    answerEl[2].innerText = questions[counter].answers.c
    answerEl[3].innerText = questions[counter].answers.d
}

answerEl.forEach(el => {
    el.addEventListener('click', selectAnswer)
})

function selectAnswer() {
    counter++
    showQuestion()
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