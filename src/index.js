import './style.css';
import post from './post';
import get from './get.js';

const refresh = document.querySelector('#refresh');
const list = document.querySelector('ul');

refresh.addEventListener('click', () => {
  list.innerHTML = '';
  get();
});

get();
post();