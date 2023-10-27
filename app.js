const quizData = [
    {
        question: "Which of the following is a pronoun?",
        a: "The",
        b: "On",
        c: "Jumps",
        d: "He",
        correct: "d",
    },
    {
        question: "Which of the following is a transitive verb?",
        a: "Be",
        b: "Sleep",
        c: "Give",
        d: "Have",
        correct: "c",
    },
    {
        question: "Which of the following is a complex sentence?",
        a: "The cat is on the mat.",
        b: "The dog ran and the cat jumped.",
        c: " Because I was tired, I went to bed.",
        d: "The quick brown fox jumps over the lazy dog.",
        correct: "c",
    },
    {
        question: "Which of the following is a prepositional phrase?",
        a: "The big blue car",
        b: "To the store",
        c: "Quickly and easily",
        d: " Under the table",
        correct: "b",
    },
    {
        question:"Which of the following is the correct use of a semicolon?",
        a:"I like to eat pizza; I also like to eat ice cream",
        b:"The cat was sleeping on the mat; the dog was running around the yard",
        c:" I went to the store, I bought some milk",
        d:"The weather is nice; let's go for a walk",
        correct: "b",
    },
    {
        question:"Which of the following is the correct use of a comma?",
        a:"I went to the store, I bought some milk.",
        b:"The cat, was sleeping on the mat.",
        c:" I like to eat pizza, ice cream, and chocolate.",
        d:"The weather is nice, let's go for a walk",
        correct: "c",
    },
    {
        question:"Which of the following is the correct use of a colon?",
        a:"Which of the following is the correct use of a hyphen?",
        b:"The cat was sleeping: on the mat.",
        c:" I like to eat pizza: ice cream: and chocolate.",
        d:"The weather is nice: let's go for a walk.",
        correct: "d",
    },
    {
        question:"Which of the following is the correct use of a hyphen?",
        a:"The mother-in-law is coming over.",
        b:"The well-done steak was delicious.",
        c:"The ice-cream cone was dripping.",
        d:" All of the above",
        correct: "d",
    },
    {
        question:"Which of the following is the correct use of quotation marks?",
        a:'The teacher said," Class dismissed."',
        b:' The book said,"It was a dark and stormy night."',
        c:' My favorite song is "Bohemian Rhapsody."',
        d:'All of the above',
        correct: "d",
    },
    {
        question:"Which of the following is the purpose of parentheses?",
        a:"To add additional information to a sentence",
        b:"To set off a quotation within a quotation",
        c:"To indicate a pause in a sentence",
        d:"All of the above",
        correct: "d",
    }
];
const quiz= document.getElementById('quiz')
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