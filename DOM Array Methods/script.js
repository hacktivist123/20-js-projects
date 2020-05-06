// DOM Elements
const main = document.getElementById('main');
const addUserButton = document.getElementById('add-user');
const doubleMoneyButton = document.getElementById('double');
const showMillionairesButton = document.getElementById('show-millionaires');
const sortButton = document.getElementById('sort');
const totalWealthButton = document.getElementById('calculate-wealth');

// data from API

let data = [];

// fetch random user and add money
const fetchRandomUser = async () => {
  const res = await fetch('https://randomuser.me/api');
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
const showMillioniares = () => {};
const sort = () => {};
const totalWealth = () => {};

// Event Listners
addUserButton.addEventListener('click', addUser);
doubleMoneyButton.addEventListener('click', doubleMoney);
showMillionairesButton.addEventListener('click', showMillioniares);
sortButton.addEventListener('click', sort);
totalWealthButton.addEventListener('click', totalWealth);
