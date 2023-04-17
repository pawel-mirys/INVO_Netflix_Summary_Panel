/// Homepage JavaScript File
/// Here we import all the JavaScript files we need for our homepage.

import './home-page.scss';

const btn = document.querySelector('.checkout-options__confirm');
const loadingSym = () => {
  btn.setAttribute('data-loading', 1);
  setTimeout(() => {
    btn.setAttribute('data-loading', 0);
  }, 1000);
};

btn.addEventListener('click', loadingSym);
