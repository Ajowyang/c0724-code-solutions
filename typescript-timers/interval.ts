const $intervalDisplay = document.querySelector(
  '.countdown-display'
) as HTMLHeadingElement;

const intervalId = setInterval(function () {
  if ($intervalDisplay.textContent) {
    const currNum = parseInt($intervalDisplay.textContent) - 1;
    if (currNum > 0) {
      $intervalDisplay.textContent = currNum.toString();
    } else {
      $intervalDisplay.textContent = '~Earth Beeeelooowww Us~';
      clearInterval(intervalId);
    }
  }
}, 1000);
