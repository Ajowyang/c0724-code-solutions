let clicks: number = 0;
const $hotButton = document.querySelector('.hot-button');

const $clickCount = document.querySelector('.click-count');

if (!$hotButton) throw new Error('The $hotButton query failed');
if (!$clickCount) throw new Error('$clickCount does not exist');

$hotButton.addEventListener('click', function () {
  if (!$hotButton || !$clickCount) {
    throw new Error('The $hotButton or $clickCount query failed');
  }

  clicks++;
  $clickCount.textContent = `Clicks: ${clicks}`;
  if (clicks < 4) {
    $hotButton.className = 'hot-button cold';
  } else if (clicks < 7) {
    $hotButton.className = 'hot-button cool';
  } else if (clicks < 10) {
    $hotButton.className = 'hot-button tepid';
  } else if (clicks < 13) {
    $hotButton.className = 'hot-button warm';
  } else if (clicks < 16) {
    $hotButton.className = 'hot-button hot';
  } else {
    $hotButton.className = 'hot-button nuclear';
  }
  console.log('clicks:', clicks);
});
