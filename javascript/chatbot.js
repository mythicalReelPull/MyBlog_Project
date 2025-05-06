// Menu toggler (reuse index_menu.js if needed)
// Chat logic
const questions = [
    { question: "Do you feel happy?", options: {a: "Yes", b: "No"}, correctAnswer: "a", correctResponse: "Super!", incorrectResponse: "I am sorry" },
    { question: "Do you feel sad?", options: {a: "Yes", b: "No"}, correctAnswer: "b", correctResponse: "Great to hear that!", incorrectResponse: "That's unfortunate." },
    { question: "Do you feel angry?", options: {a: "Yes", b: "No"}, correctAnswer: "b", correctResponse: "That's good to hear.", incorrectResponse: "That's understandable." },
    { question: "Do you feel anxious?", options: {a: "Yes", b: "No"}, correctAnswer: "b", correctResponse: "That's great!", incorrectResponse: "It's okay to feel that way." }
];
let currentQuestionIndex = 0;

const chatContainer = document.getElementById('chat-container');
const chatForm = document.getElementById('chat-form');
const userInput = document.getElementById('user-input');

function displayQuestion() {
    const q = questions[currentQuestionIndex];
    const msg = document.createElement('div');
    msg.className = 'message';
    const opts = Object.entries(q.options).map(([key,val]) => `${key}: ${val}`).join(' | ');
    msg.innerHTML = `<strong>Bot:</strong> ${q.question} <br><em>${opts}</em>`;
    chatContainer.appendChild(msg);
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

chatForm.addEventListener('submit', e => {
    e.preventDefault();
    const text = userInput.value.trim().toLowerCase();
    if (!text) return;
    const userMsg = document.createElement('div');
    userMsg.className = 'message';
    userMsg.innerHTML = `<strong>You:</strong> ${text}`;
    chatContainer.appendChild(userMsg);

    const q = questions[currentQuestionIndex];
    const key = Object.entries(q.options).find(([,v]) => v.toLowerCase()===text)?.[0];
    const botMsg = document.createElement('div');
    botMsg.className = 'message';
    botMsg.innerHTML = `<strong>Bot:</strong> ${key===q.correctAnswer ? q.correctResponse : q.incorrectResponse}`;
    chatContainer.appendChild(botMsg);

    currentQuestionIndex = (currentQuestionIndex+1)%questions.length;
    userInput.value = '';
    setTimeout(displayQuestion, 500);
});

document.addEventListener('DOMContentLoaded', displayQuestion);