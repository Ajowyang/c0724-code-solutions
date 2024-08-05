const $intervalDisplay = document.querySelector(
  '.countdown-display'
) as HTMLHeadingElement;

let displayValue = $intervalDisplay.textContent as string;

const intervalId = setInterval(function () {
  if (parseInt(displayValue) && parseInt(displayValue) >= 2) {
    displayValue = (parseInt(displayValue) - 1).toString();
    $intervalDisplay.textContent = displayValue;
  } else {
    $intervalDisplay.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(intervalId);
  }
}, 1000);
