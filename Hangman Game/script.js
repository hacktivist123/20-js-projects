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
      word => `<span class="letter">
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

// Update the Wrong letters
const updateWrongLettersEl = () => {};

// Show Notification
const showNotification = () => {
  notification.classList.add('show');
  setTimeout(() => {
    notification.classList.remove('show');
  }, 2000);
};
// Keyboard Letter Press Event Handler
window.addEventListener('keydown', e => {
  // console.log(e.keyCode);
  if (e.keyCode >= 65 && e.keyCode <= 90) {
    const letter = e.key;

    if (selectedWord.includes(letter)) {
      if (!correctLetters.includes(letter)) {
        correctLetters.push(letter);
        displayWord();
      } else {
        showNotification();
      }
    } else if (!wrongLetters.includes(letter)) {
      wrongLetters.push(letter);
      updateWrongLettersEl();
    } else {
      showNotification();
    }
  }
});

displayWord();
