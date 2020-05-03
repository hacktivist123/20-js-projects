const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');

// display error message
const displayError = (input, message) => {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const small = formControl.querySelector('small');
  small.innerText = message;
};
const displaySuccess = input => {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
};
//  Event Listeners
form.addEventListener('submit', e => {
  e.preventDefault();
  if (username.value === '') {
    displayError(username, 'Username is Required');
  } else {
    displaySuccess(username);
  }
});
