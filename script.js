const questions = [
    {
        question: "Qual estrutura celular é responsável pela produção de energia na forma de ATP?",
        answers: [
            { text: "Núcleo", correct: false },
            { text: "Mitocôndria", correct: true },
            { text: "Ribossomo", correct: false },
            { text: "Vacúolo", correct: false }
        ]
    },
    {
        question: "Qual IST é causada por uma bactéria e pode levar a feridas indolores?",
        answers: [
            { text: "Herpes Genital", correct: false },
            { text: "Sífilis", correct: true },
            { text: "HPV", correct: false },
            { text: "AIDS", correct: false }
        ]
    },
    {
        question: "O processo de fotossíntese ocorre em qual organela vegetal?",
        answers: [
            { text: "Complexo de Golgi", correct: false },
            { text: "Retículo Endoplasmático", correct: false },
            { text: "Cloroplasto", correct: true },
            { text: "Parede Celular", correct: false }
        ]
    },
    {
        question: "Qual das seguintes ISTs é viral e não tem cura, mas pode ser controlada com medicamentos?",
        answers: [
            { text: "Gonorreia", correct: false },
            { text: "Clamídia", correct: false },
            { text: "Herpes Genital", correct: true },
            { text: "Tricomoníase", correct: false }
        ]
    },
    {
        question: "Qual é a unidade básica da hereditariedade?",
        answers: [
            { text: "Proteína", correct: false },
            { text: "Célula", correct: false },
            { text: "Gene", correct: true },
            { text: "Tecido", correct: false }
        ]
    },
    {
        question: "Qual é o nome do processo pelo qual as plantas liberam água em forma de vapor?",
        answers: [
            { text: "Respiração", correct: false },
            { text: "Transpiração", correct: true },
            { text: "Gutação", correct: false },
            { text: "Condensação", correct: false }
        ]
    },
    {
        question: "Qual IST pode causar verrugas genitais e é prevenida por vacina?",
        answers: [
            { text: "Herpes Genital", correct: false },
            { text: "Gonorreia", correct: false },
            { text: "HPV (Papilomavírus Humano)", correct: true },
            { text: "Clamídia", correct: false }
        ]
    },
    {
        question: "Qual é a função principal dos glóbulos vermelhos no sangue?",
        answers: [
            { text: "Combater infecções", correct: false },
            { text: "Coagulação sanguínea", correct: false },
            { text: "Transporte de oxigênio", correct: true },
            { text: "Produção de anticorpos", correct: false }
        ]
    },
    {
        question: "A AIDS é causada por qual tipo de vírus?",
        answers: [
            { text: "Adenovírus", correct: false },
            { text: "Retrovírus", correct: true },
            { text: "Rinovírus", correct: false },
            { text: "Coronavírus", correct: false }
        ]
    },
    {
        question: "Qual é o nome do açúcar encontrado no DNA?",
        answers: [
            { text: "Ribose", correct: false },
            { text: "Glicose", correct: false },
            { text: "Desoxirribose", correct: true },
            { text: "Frutose", correct: false }
        ]
    },
    {
        question: "Qual IST afeta principalmente a uretra, colo do útero e reto, causando secreção e dor ao urinar?",
        answers: [
            { text: "Sífilis", correct: false },
            { text: "Gonorreia", correct: true },
            { text: "Herpes Genital", correct: false },
            { text: "Tricomoníase", correct: false }
        ]
    },
    {
        question: "Qual órgão do corpo humano é responsável por filtrar o sangue e produzir a urina?",
        answers: [
            { text: "Fígado", correct: false },
            { text: "Pulmões", correct: false },
            { text: "Rins", correct: true },
            { text: "Pâncreas", correct: false }
        ]
    },
    {
        question: "Qual IST é causada por um protozoário e pode causar corrimento vaginal com odor forte?",
        answers: [
            { text: "Clamídia", correct: false },
            { text: "Gonorreia", correct: false },
            { text: "Tricomoníase", correct: true },
            { text: "Candidíase", correct: false }
        ]
    },
    {
        question: "O que é o ciclo de Krebs na respiração celular?",
        answers: [
            { text: "Produção de oxigênio", correct: false },
            { text: "Síntese de proteínas", correct: false },
            { text: "Série de reações que liberam energia", correct: true },
            { text: "Replicação do DNA", correct: false }
        ]
    },
    {
        question: "Qual das seguintes ISTs é uma infecção bacteriana comum que muitas vezes não apresenta sintomas?",
        answers: [
            { text: "Herpes Genital", correct: false },
            { text: "Clamídia", correct: true },
            { text: "AIDS", correct: false },
            { text: "Cancro Mole", correct: false }
        ]
    },
    {
        question: "Qual é o principal componente das paredes celulares das plantas?",
        answers: [
            { text: "Amido", correct: false },
            { text: "Celulose", correct: true },
            { text: "Lignina", correct: false },
            { text: "Pectina", correct: false }
        ]
    },
    {
        question: "A Hepatite B e C afetam principalmente qual órgão?",
        answers: [
            { text: "Coração", correct: false },
            { text: "Pulmões", correct: false },
            { text: "Fígado", correct: true },
            { text: "Rins", correct: false }
        ]
    },
    {
        question: "Qual é a função do sistema nervoso?",
        answers: [
            { text: "Digestão de alimentos", correct: false },
            { text: "Transporte de nutrientes", correct: false },
            { text: "Controle e coordenação do corpo", correct: true },
            { text: "Produção de hormônios", correct: false }
        ]
    },
    {
        question: "O uso correto e consistente de qual método é essencial para prevenir a maioria das ISTs?",
        answers: [
            { text: "Pílula anticoncepcional", correct: false },
            { text: "DIU", correct: false },
            { text: "Camada (preservativo)", correct: true },
            { text: "Coito interrompido", correct: false }
        ]
    },
    {
        question: "Qual das seguintes não é uma função da água no corpo humano?",
        answers: [
            { text: "Regulação da temperatura", correct: false },
            { text: "Transporte de nutrientes", correct: false },
            { text: "Fonte de energia primária", correct: true },
            { text: "Lubrificação de articulações", correct: false }
        ]
    }
];

const questionElement = document.getElementById('question');
const questionIndicator = document.getElementById('question-indicator');
const answerButtonsElement = document.getElementById('answers');
const resultContainer = document.getElementById('result-container');
const gameOverContainer = document.getElementById('game-over-container');
const quizContainer = document.querySelector('.quiz-container');
const restartButton = document.getElementById('restart-button');
const restartGameOverButton = document.getElementById('restart-game-over-button');
const scoreElement = document.getElementById('score');
const totalQuestionsElement = document.getElementById('total-questions');
const correctFeedbackIcon = document.getElementById('correct-feedback');
const gameOverTitle = document.getElementById('game-over-title');
const gameOverImage = document.getElementById('game-over-image');
const gameOverSound = document.getElementById('game-over-sound');

const timerElement = document.getElementById('timer');
const timerProgressBar = document.querySelector('.timer-progress');
const TIMER_DURATION = 30;
const CIRCLE_RADIUS = 30;
const CIRCUMFERENCE = 2 * Math.PI * CIRCLE_RADIUS;

let currentQuestionIndex = 0;
let score = 0;
let timeLeft = TIMER_DURATION;
let timerInterval;

// NOVO: Variáveis para o sistema de vidas
let lives = 5;
const livesCountElement = document.getElementById('lives-count');


timerProgressBar.style.strokeDasharray = CIRCUMFERENCE;
timerProgressBar.style.strokeDashoffset = 0;

const allScreens = [quizContainer, resultContainer, gameOverContainer];

function showScreen(screenToShow) {
    allScreens.forEach(screen => {
        screen.classList.add('hide');
        screen.classList.remove('active-screen');
    });

    screenToShow.classList.remove('hide');
    screenToShow.classList.add('active-screen');
}

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    lives = 5; // Reseta as vidas
    updateLivesDisplay(); // Atualiza a exibição das vidas

    // NOVO: Embaralha a ordem das perguntas no início do jogo
    shuffleArray(questions);

    showScreen(quizContainer);
    showQuestion();
    startTimer();

    
    showScreen(quizContainer);

    showQuestion();
    startTimer();
}

function showQuestion() {
    resetState();
    const currentQuestion = questions[currentQuestionIndex];
    
    questionIndicator.innerText = `${currentQuestionIndex + 1}/${questions.length}`;

    questionElement.innerText = currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('answer-button');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    });

    resetTimer();
    startTimer();
}

function resetState() {
    Array.from(answerButtonsElement.children).forEach(button => {
        button.classList.remove('correct', 'incorrect');
    });

    correctFeedbackIcon.classList.add('hide');
    correctFeedbackIcon.classList.remove('show');

    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

// NOVA FUNÇÃO: Atualiza a exibição das vidas
function updateLivesDisplay() {
    livesCountElement.innerText = lives;
}

function selectAnswer(e) {
    stopTimer();

    const selectedButton = e.target;
    const isCorrect = selectedButton.dataset.correct === "true";

    Array.from(answerButtonsElement.children).forEach(button => {
        button.disabled = true;
        if (button.dataset.correct === "true") {
            button.classList.add('correct');
        } else if (button === selectedButton && !isCorrect) {
            button.classList.add('incorrect');
        }
    });

    if (isCorrect) {
        score++;
        correctFeedbackIcon.classList.remove('hide');
        correctFeedbackIcon.classList.add('show');
        setTimeout(advanceQuestion, 1500);
    } else {
        lives--; // Decrementa uma vida
        updateLivesDisplay(); // Atualiza a exibição das vidas
        if (lives <= 0) {
            setTimeout(() => showGameOver(), 2000);
        } else {
            setTimeout(advanceQuestion, 2000);
        }
    }
}

function showResult() {
    stopTimer();
    showScreen(resultContainer);

    timerProgressBar.style.strokeDashoffset = 0;
    timerElement.innerText = TIMER_DURATION;

    scoreElement.innerText = score;
    totalQuestionsElement.innerText = questions.length;
}

function showGameOver() {
    stopTimer();
    showScreen(gameOverContainer); 

    gameOverTitle.innerText = "VOCÊ PERDEU!";

    if (gameOverSound) {
        gameOverSound.currentTime = 0; 
        gameOverSound.play().catch(e => console.error("Erro ao tocar som:", e)); 
    }

    timerProgressBar.style.strokeDashoffset = 0;
    timerElement.innerText = TIMER_DURATION;
}

function advanceQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function startTimer() {
    timeLeft = TIMER_DURATION;
    timerElement.innerText = timeLeft;

    timerProgressBar.style.strokeDashoffset = 0;

    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        timeLeft--;
        timerElement.innerText = timeLeft;

        const offset = CIRCUMFERENCE - (timeLeft / TIMER_DURATION) * CIRCUMFERENCE;
        timerProgressBar.style.strokeDashoffset = offset;

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            setTimeout(() => {
                lives--; // Decrementa uma vida ao esgotar o tempo
                updateLivesDisplay();
                if (lives <= 0) {
                    showGameOver();
                } else {
                    advanceQuestion(); // Continua o jogo se ainda tiver vidas
                }
            }, 500); 
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
}

function resetTimer() {
    stopTimer();
    timeLeft = TIMER_DURATION;
    timerElement.innerText = timeLeft;
    timerProgressBar.style.strokeDashoffset = 0;
}

restartButton.addEventListener('click', startQuiz);
restartGameOverButton.addEventListener('click', startQuiz);

startQuiz();

// Função para embaralhar um array (Fisher-Yates shuffle)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function showQuestion() {
    resetState();
    const currentQuestion = questions[currentQuestionIndex];
    
    questionIndicator.innerText = `${currentQuestionIndex + 1}/${questions.length}`;

    questionElement.innerText = currentQuestion.question;

    // NOVO: Embaralha as respostas antes de exibi-las
    shuffleArray(currentQuestion.answers);

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('answer-button');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    });

    resetTimer();
    startTimer();
}