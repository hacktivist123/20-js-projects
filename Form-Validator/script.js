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
const displaySuccess = (input) => {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
};
// Check if email is valid
const isEmailValid = (email) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const isUsernameValid = (username) => {
  const re = /^[a-zA-Z0-9-]{3,}$/;
  return re.test(username);
};
//  Event Listeners
form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (username.value === '') {
    displayError(username, 'Username is Required');
  } else if (!isUsernameValid(username.value)) {
    displayError(
      username,
      `Username is not vaild, only alphanumeric characters and '-' are allowed`
    );
  } else {
    displaySuccess(username);
  }
  if (email.value === '') {
    displayError(email, 'Email is Required');
  } else if (!isEmailValid(email.value)) {
    displayError(email, 'Please provide a valid email');
  } else {
    displaySuccess(email);
  }
  if (password.value === '') {
    displayError(password, 'Password is Required');
  } else {
    displaySuccess(password);
  }
  if (
    confirmPassword.value !== password.value ||
    confirmPassword.value === ''
  ) {
    displayError(confirmPassword, `Passwords don't match`);
  } else {
    displaySuccess(confirmPassword);
  }
});
