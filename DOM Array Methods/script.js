// DOM Elements
const addUserButton = document.getElementById('add-user');
const doubleMoneyButton = document.getElementById('double');
const main = document.getElementById('main');
const showMillionairesButton = document.getElementById('show-millionaires');
const sortButton = document.getElementById('sort');
const totalWealthButton = document.getElementById('calculate-wealth');

// data from API
const apiUrl = 'https://randomuser.me/api';
const data = [];
// fetch random user and add money
const fetchRandomUser = async () => {
  const res = await fetch(apiUrl);
  const fetchData = await res.json();
  const user = fetchData.results[0];
  const newUser = {
    name: `${user.name.first} ${user.name.last}`,
    money: new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'USD',
    }).format(Math.floor(Math.random() * 10000000)),
  };
  console.log(newUser);
};

fetchRandomUser();
fetchRandomUser();
fetchRandomUser();
fetchRandomUser();

// Functions
const addUser = () => {};
const doubleMoney = () => {};
const showMillionaires = () => {};
const sort = () => {};
const totalWealth = () => {};

// Event Listeners
addUserButton.addEventListener('click', addUser);
doubleMoneyButton.addEventListener('click', doubleMoney);
showMillionairesButton.addEventListener('click', showMillionaires);
sortButton.addEventListener('click', sort);
totalWealthButton.addEventListener('click', totalWealth);
