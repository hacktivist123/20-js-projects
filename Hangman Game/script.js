const wordEl = document.getElementById('word');
const wrongLettersEl = document.getElementById('wrong-letters');
const playAgainBtn = document.getElementById('play-button');
const popup = document.getElementById('popup-container');
const notification = document.getElementById('notification-container');
const finalMessage = document.getElementById('final-message');

const figureParts = document.querySelectorAll('.figure-part');

const words = ['application', 'programming', 'interface', 'wizard'];

const selectedWord = words[Math.floor(Math.random() * words.length)];

const correctLetters = [];
const wrongLetters = [];

// Display Word
const displayWord = () => {
  wordEl.innerHTML = `
  ${selectedWord
    .split('')
    .map(
      (word) => `<span class="letter">
    ${correctLetters.includes(word) ? word : ''}
  </span>
  `
    )
    .join('')}
  `;
  const innerWord = wordEl.innerText.replace(/\n/g, '');
  if (innerWord === selectedWord) {
    finalMessage.innerText = 'Congratulations! You Won 👏🏼🥳';
    popup.style.display = 'flex';
  }
};

displayWord();
