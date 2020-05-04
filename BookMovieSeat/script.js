const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

let ticketPrice = Number(movieSelect.value);
// update total and count on select
const updateSelectedCount = () => {
  const selectedSeats = document.querySelectorAll('.row .seat.selected');
  const selectedSeatsAmount = selectedSeats.length;
  /* copy selected seats into arr, 
  map through the arr & 
  return new array of indexes */
  const seatsIndex = [...selectedSeats].map((seat) => [...seats].indexOf(seat));
  console.log(seatsIndex);
  count.innerText = selectedSeatsAmount;
  total.innerText = `N${selectedSeatsAmount * ticketPrice}`;
  // copy selected seats into arr, map through the arr & returhn new array of indexes
};
// movie select event

movieSelect.addEventListener('change', (e) => {
  ticketPrice = Number(e.target.value);
  updateSelectedCount();
});
// seats select event
container.addEventListener('click', (e) => {
  if (
    e.target.classList.contains('seat') &&
    !e.target.classList.contains('occupied')
  ) {
    e.target.classList.toggle('selected');
    updateSelectedCount();
  }
});
