const quizData = [

    {
        question: "Who owns Springfield's nuclear power plant?",
        a: "Ayn Rand",
        b: "Seymour Skinner",
        c: "Montgomery Burns",
        d: "Waylon Smithers",
        correct: "c"
    },

    {
        question: "What is the name of the character who loves disco music?",
        a: "Lou",
        b: "Sue",
        c: "Barney",
        d: "Stu",
        correct: "d",        
    },

    {
        question: "What is the name of Apu's store in Springfield?",
        a: "7-11",
        b: "Kwik-E-Mart",
        c: "Try-N-Save",
        d: "Stop-N-Shop",
        correct: "b",
    },

    {
        question: "What nickname did Homer give himself when he started a snow clearing business?",
        a: "Plow Dude",
        b: "White Out Snow Removal",
        c: "Mr. Plow",
        d: "Sargeant Shovel",
        correct: "c",
    },



];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()

    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>
                <button onclick="location.reload()">Reload</button>
            `
        }
    }
})