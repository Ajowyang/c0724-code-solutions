const $intervalDisplay = document.querySelector(
  '.countdown-display'
) as HTMLHeadingElement;

let displayValue: number = 4;

const intervalId = setInterval(function () {
  if (displayValue >= 2) {
    displayValue--;
    $intervalDisplay.textContent = displayValue.toString();
  } else {
    $intervalDisplay.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(intervalId);
  }
}, 1000);
