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
  console.log(res);
  const fetchData = await res.json();
  const user = fetchData.results[0];
  const newUser = {
    name: `${user.name.first} ${user.name.last}`,
    money: new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'USD',
    }).format(Math.floor(Math.random() * 10000000)),
  };
  addUser(newUser);
};

fetchRandomUser();
fetchRandomUser();
fetchRandomUser();
fetchRandomUser();

// Functions
const addUser = (obj) => {
  data.push(obj);
  updateDOM();
};
const doubleMoney = () => {};
const showMillionaires = () => {};
const sort = () => {};
const totalWealth = () => {};
const updateDOM = (providedData = data) => {
  // Clear Main Div
  main.innerHTML = '<h2><strong>Person</strong> Wealth</h2>';
  // Loop through the data array
  providedData.forEach(person => {
    // Create a Div
    const element = document.createElement('div');
    // Add a class of person to our new element
    element.classList.add('person');
    // Add html to our new element
    element.innerHTML = `<strong>${person.name}</strong> ${person.money}`;

    // Attach our new element to the main div
    main.appendChild(element);
  });
};
// Event Listeners
addUserButton.addEventListener('click', addUser);
doubleMoneyButton.addEventListener('click', doubleMoney);
showMillionairesButton.addEventListener('click', showMillionaires);
sortButton.addEventListener('click', sort);
totalWealthButton.addEventListener('click', totalWealth);
