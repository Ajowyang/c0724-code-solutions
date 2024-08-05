'use strict';
const $intervalDisplay = document.querySelector('.countdown-display');
let displayValue = $intervalDisplay.textContent;
const intervalId = setInterval(function () {
  if (parseInt(displayValue) && parseInt(displayValue) >= 2) {
    displayValue = (parseInt(displayValue) - 1).toString();
    $intervalDisplay.textContent = displayValue;
  } else {
    $intervalDisplay.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(intervalId);
  }
}, 1000);
