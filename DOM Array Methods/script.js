// DOM Elements
const addUserButton = document.getElementById('add-user');
const doubleMoneyButton = document.getElementById('double');
const main = document.getElementById('main');
const showMillionairesButton = document.getElementById('show-millionaires');
const sortButton = document.getElementById('sort');
const sortPoorButton = document.getElementById('sort-poor');
const totalWealthButton = document.getElementById('calculate-wealth');

// data from API
const apiUrl = 'https://randomuser.me/api';
let data = [];

// Functions
function formatMoney(number) {
  return `$${number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}`;
}
const updateDOM = (providedData = data) => {
  // Clear Main Div
  main.innerHTML = '<h2><strong>Person</strong> Wealth</h2>';

  // Loop through the data array
  providedData.forEach((person) => {
    // Create a Div
    const element = document.createElement('div');
    // Add a class of person to our new element
    element.classList.add('person');
    // Add html to our new element
    element.innerHTML = `<strong>${person.name}</strong> ${formatMoney(
      person.money
    )}`;

    // Attach our new element to the main div
    main.appendChild(element);
  });
};
const addUserToDOM = (obj) => {
  data.push(obj);
  updateDOM();
};
const doubleMoney = () => {
  data = data.map((user) => ({ ...user, money: user.money * 2 }));
  updateDOM();
};

const showMillionaires = () => {
  data = data.filter((people) => people.money > 1000000);
  console.log(data);
  updateDOM();
};

const sort = () => {
  data = data.sort((a, b) => b.money - a.money);
  updateDOM();
};

const sortByPoorest = () => {
  data = data.sort((a, b) => a.money - b.money);
  updateDOM();
};

const totalWealth = () => {
  const wealth = data.reduce((acc, user) => (acc += user.money), 0);
  const wealthEl = document.createElement('div');
  wealthEl.innerHTML = `<h3>Total Wealth: <strong>${formatMoney(
    wealth
  )}</strong></h3>`;
  main.appendChild(wealthEl);
};

const fetchRandomUser = async () => {
  const res = await fetch(apiUrl);
  const fetchData = await res.json();
  const user = fetchData.results[0];
  const newUser = {
    name: `${user.name.first} ${user.name.last}`,
    money: Math.floor(Math.random() * 10000000),
  };
  addUserToDOM(newUser);
};

fetchRandomUser();
fetchRandomUser();
fetchRandomUser();

// Event Listeners
addUserButton.addEventListener('click', fetchRandomUser);
doubleMoneyButton.addEventListener('click', doubleMoney);
showMillionairesButton.addEventListener('click', showMillionaires);
sortButton.addEventListener('click', sort);
sortPoorButton.addEventListener('click', sortByPoorest);
totalWealthButton.addEventListener('click', totalWealth);
