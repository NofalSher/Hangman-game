//Getting DOM Elements
const word = document.getElementById('word');
const incorrectLetters = document.getElementById('incorrect-letter');
const popup = document.getElementById('popup-container');
const playBtn = document.getElementById('play-btn');
const finalMessage = document.getElementById('final-message');
const notification = document.getElementById('notification');

//Get DOM elements for Hangman
const figureParts = document.querySelectorAll('.figure-part');


//This is pool of words which will be used to select random  number
const words = ["work", "sell", "independent", "goes", "beat", "stage", "scared", "invented", "cannot", "probably", "butter", "replied", "call", "those", "during", "mile", "broke", "began", "be", "morning", "replied", "body", "origin", "browserling", "trace", "design", "stone", "fairly", "shake", "block", "win", "yet", "part", "poet", "born", "correctly", "away", "central", "grandfather", "vowel", "short", "energy"];

//select a random word from array

let selectedWord = words[Math.floor(Math.random() * words.length)];

// Tracking arrays for correct and incorrect guesses
const correctLettersArray = [];
const incorrectLettersArray = [];

//Function to display selected word in the DOM
function displayWord() {
    word.innerHTML = `${selectedWord
        .split('')
        .map(letter => `
        <span class="letter"> 
        ${correctLettersArray.includes(letter) ? letter:''}
        </span>`)}`
};

// Execute displayWord on page load
displayWord();