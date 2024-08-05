'use strict';
const $intervalDisplay = document.querySelector('.countdown-display');
const intervalId = setInterval(function () {
  if ($intervalDisplay.textContent) {
    let currNum = parseInt($intervalDisplay.textContent) - 1;
    if (currNum > 0) {
      $intervalDisplay.textContent = currNum.toString();
    } else {
      $intervalDisplay.textContent = '~Earth Beeeelooowww Us~';
      clearInterval(intervalId);
    }
  }
}, 1000);
