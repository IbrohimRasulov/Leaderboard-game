import './style.css';
import post from './post';
import get from './get';

const refresh = document.querySelector('#refresh');
const list = document.querySelector('ul');

refresh.addEventListener('click', () => {
  list.innerHTML = '';
  get();
});

const printTime = () => {
  const currentDate = document.getElementById('currentDate');
  // eslint-disable-next-line no-undef
  currentDate.innerHTML = `<div>${luxon.DateTime.now().toFormat('MMMM dd, yyyy')}</div>`;
};

setInterval(printTime, 1000);
get();
post();