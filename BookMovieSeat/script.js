const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

let ticketPrice = Number(movieSelect.value);

// save selected movie index and price
const setMovieData = (index, price) => {
  localStorage.setItem('Movie Index', index);
  localStorage.setItem('Movie Price', price);
};

// update total and count on select
const updateSelectedCount = () => {
  const selectedSeats = document.querySelectorAll('.row .seat.selected');
  const selectedSeatsAmount = selectedSeats.length;

  /* copy selected seats into arr, 
  map through the arr & 
  return new array of indexes */
  const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat));

  // Store selected seats in localStorage
  localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));
  count.innerText = selectedSeatsAmount;
  total.innerText = `N${selectedSeatsAmount * ticketPrice}`;
};

// movie select event
movieSelect.addEventListener('change', e => {
  ticketPrice = Number(e.target.value);
  updateSelectedCount();
  setMovieData(e.target.selectedIndex, e.target.value);
});

// seats select event
container.addEventListener('click', e => {
  if (
    e.target.classList.contains('seat') &&
    !e.target.classList.contains('occupied')
  ) {
    e.target.classList.toggle('selected');
    updateSelectedCount();
  }
});
