const startButton = document.getElementById('start-button');
const questionContainer = document.getElementById('divId');
const questionEl = document.getElementById('question-bar');
const answerEl = document.querySelectorAll('.answer');
const resetGame = document.getElementById('reset-button');
const scoreEl = document.getElementById('spanScore')
const gameOver = document.getElementById('score-id')
const changePic = document.getElementById('game-pic')
const changePic2 = document.getElementById('game-pic2')
const changePic3 = document.getElementById('game-pic3')
const lostBackground = document.querySelector('.container')

let counter = 0;
let timer;
let score = 0;

lostBackground.classList.remove('hide');
startButton.addEventListener('click', startQuiz);
resetGame.addEventListener('click', reset);
changePic.classList.remove('hide');
changePic2.classList.add('hide');
changePic3.classList.add('hide');

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
    addClick();
    } else {
        questionContainer.classList.add('hide');
        resetGame.classList.remove('hide');
        if (score > 15) {
        gameOver.innerText = '🏆WAY TO GO CHAMP!✅';
        changePic.classList.add('hide');
        changePic2.classList.remove('hide');
        } else {
        gameOver.innerText = '😢MAYBE NEXT TIME!❌';
        changePic.classList.add('hide');
        changePic3.classList.remove('hide');
        lostBackground.style.backgroundColor = 'red'
        }
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

function addClick() {answerEl.forEach(el => {
    el.addEventListener('click', buttonEvents
);
})}

addClick();

function limitClick() {answerEl.forEach(el => {
    el.removeEventListener('click', buttonEvents
);
})}

function buttonEvents(e) {
    clearTimeout(timer);
    selectAnswer(e);
}

function selectAnswer(e) {
    limitClick();
    let userAnswer = e.target.id;
    let button = e.target;
    if (userAnswer === questions[counter].correctAnswer) {
        button.style.backgroundColor = 'green';
        score++;
        scoreEl.innerText = score;
        counter++;
    } else {
        button.style.backgroundColor = 'red';
        counter++;
    }
    setTimeout(() => setNextQuestion(), 3000);
}

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
        question: 'How many states does the USA have?',
    answers: {
        a: '50',
        b: '49',
        c: '51',
        d: '43'
    },
    correctAnswer: 'a'
},
    {
        question: 'How many countries are there in the UK?',
    answers: {
        a: '3',
        b: '4',
        c: '5',
        d: '6'
    },
    correctAnswer: 'b'
},
    {
        question: 'What is the capital of Turkey?',
    answers: {
        a: 'Izmir',
        b: 'Istanbul',
        c: 'Ankara',
        d: 'Bursa'
    },
    correctAnswer: 'c'
},
    {
        question: 'What is the smallest country?',
    answers: {
        a: 'Vatican',
        b: 'San Marino',
        c: 'Monaco',
        d: 'Nauru'
    },
    correctAnswer: 'a'
},
    {
        question: 'What is the largest ocean?',
    answers: {
        a: 'Pacific',
        b: 'Indian',
        c: 'Atlantic',
        d: 'Arctic'
    },
    correctAnswer: 'a'
},
    {
        question: 'What is the largest desert?',
    answers: {
        a: 'Sahara',
        b: 'Arctic',
        c: 'Antartica',
        d: 'Gobi'
    },
    correctAnswer: 'c'
},
    {
        question: 'What is the largest continent?',
    answers: {
        a: 'Africa',
        b: 'Asia',
        c: 'Europe',
        d: 'Australia'
    },
    correctAnswer: 'b'
},
    {
        question: 'What is the highest mountain?',
    answers: {
        a: 'Mt. Everest',
        b: 'Mt. K2',
        c: 'Mt. Lhotse',
        d: 'Mt. Makalu'
    },
    correctAnswer: 'a'
},
    {
        question: 'Where is “The Great Wall” located?',
    answers: {
        a: 'Brazil',
        b: 'Japan',
        c: 'China',
        d: 'Germany'
    },
    correctAnswer: 'c'
},
    {
        question: 'What country borders Mexico?',
    answers: {
        a: 'Brazil',
        b: 'Panama',
        c: 'Argentina',
        d: 'USA'
    },
    correctAnswer: 'd'
},
    {
        question: 'What is the correct spelling of this country?',
    answers: {
        a: 'Kyrgystan',
        b: 'Kyrgyzstan',
        c: 'Kirgystan',
        d: 'Kyrgysztan'
    },
    correctAnswer: 'b'
},
    {
        question: 'What is the largest state in the USA?',
    answers: {
        a: 'California',
        b: 'Texas',
        c: 'Montana',
        d: 'Alaska'
    },
    correctAnswer: 'd'
},
    {
        question: 'What is the capital of Canada?',
    answers: {
        a: 'Toronto',
        b: 'Vancouver',
        c: 'Ottawa',
        d: 'Montreal'
    },
    correctAnswer: 'c'
},
    {
        question: 'How many days are in 1 year?',
    answers: {
        a: '365',
        b: '366',
        c: '360',
        d: '365.25'
    },
    correctAnswer: 'd'
},
    {
        question: 'How many languages are spoken in India?',
    answers: {
        a: '22',
        b: '1',
        c: '2',
        d: '47'
    },
    correctAnswer: 'a'
},
    {
        question: 'What country owns Greenland?',
    answers: {
        a: 'Russia',
        b: 'USA',
        c: 'Norway',
        d: 'Denmark'
    },
    correctAnswer: 'd'
},
    {
        question: 'How many countries have non-rectangular flag shape?',
    answers: {
        a: 'None',
        b: '1',
        c: '2',
        d: '3'
    },
    correctAnswer: 'd'
},
]