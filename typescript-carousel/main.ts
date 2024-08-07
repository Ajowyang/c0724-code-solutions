const images: string[] = [
  './images/001.png',
  './images/004.png',
  './images/007.png',
  './images/025.png',
  './images/039.png',
];

let currNdx: number = 0;

const $displayImage = document.querySelector(
  '.display-image'
) as HTMLImageElement;
if (!$displayImage) throw new Error('.display-image query failed!');

$displayImage.setAttribute('src', images[currNdx]);

const $carouselContainer = document.querySelector(
  '.carousel-container'
) as HTMLDivElement;
if (!$carouselContainer) throw new Error('.carousel-container query failed!');

const $leftArrow = document.querySelector('.fa-chevron-left');
if (!$leftArrow) throw new Error('.fa-chevron-left query failed!');
const $rightArrow = document.querySelector('.fa-chevron-right');
if (!$rightArrow) throw new Error('.fa-chevron-right query failed!');

const $circles = document.querySelectorAll('.fa-circle');
if (!$circles) throw new Error('.fa-circles query failed!');

$carouselContainer.addEventListener('click', function (event: Event) {
  if (event.target === $leftArrow) {
    moveLeft();
  }

  if (event.target === $rightArrow) {
    moveRight();
  }

  switch (event.target) {
    case $circles[0]: {
      clearInterval(intervalId);
      intervalId = setInterval(intervalFunc, 3000);
      $circles[currNdx].classList.remove('fa-solid');
      $circles[currNdx].classList.add('fa-regular');
      setNdxImageAndDot(0);
      break;
    }
    case $circles[1]: {
      clearInterval(intervalId);
      intervalId = setInterval(intervalFunc, 3000);
      $circles[currNdx].classList.remove('fa-solid');
      $circles[currNdx].classList.add('fa-regular');
      setNdxImageAndDot(1);
      break;
    }
    case $circles[2]: {
      clearInterval(intervalId);
      intervalId = setInterval(intervalFunc, 3000);
      $circles[currNdx].classList.remove('fa-solid');
      $circles[currNdx].classList.add('fa-regular');
      setNdxImageAndDot(2);
      break;
    }
    case $circles[3]: {
      clearInterval(intervalId);
      intervalId = setInterval(intervalFunc, 3000);
      $circles[currNdx].classList.remove('fa-solid');
      $circles[currNdx].classList.add('fa-regular');
      setNdxImageAndDot(3);
      break;
    }
    case $circles[4]: {
      clearInterval(intervalId);
      intervalId = setInterval(intervalFunc, 3000);
      $circles[currNdx].classList.remove('fa-solid');
      $circles[currNdx].classList.add('fa-regular');
      setNdxImageAndDot(4);
      break;
    }
  }
});

let intervalId = setInterval(intervalFunc, 3000);

function setNdxImageAndDot(index: number): void {
  currNdx = index;
  $displayImage.setAttribute('src', images[index]);
  $circles[index].classList.add('fa-solid');
  $circles[index].classList.remove('fa-regular');
}

function intervalFunc(): void {
  $circles[currNdx].classList.remove('fa-solid');
  $circles[currNdx].classList.add('fa-regular');
  currNdx++;
  if (currNdx === 5) {
    currNdx = 0;
  }
  setNdxImageAndDot(currNdx);
}

function moveRight(): void {
  clearInterval(intervalId);
  intervalId = setInterval(intervalFunc, 3000);
  if (currNdx <= 3) {
    $circles[currNdx].classList.remove('fa-solid');
    $circles[currNdx].classList.add('fa-regular');
    setNdxImageAndDot(currNdx + 1);
  } else if (currNdx === 4) {
    $circles[currNdx].classList.remove('fa-solid');
    $circles[currNdx].classList.add('fa-regular');
    setNdxImageAndDot(0);
  }
}

function moveLeft(): void {
  clearInterval(intervalId);
  intervalId = setInterval(intervalFunc, 3000);
  if (currNdx >= 1) {
    $circles[currNdx].classList.remove('fa-solid');
    $circles[currNdx].classList.add('fa-regular');
    setNdxImageAndDot(currNdx - 1);
  } else if (currNdx === 0) {
    $circles[currNdx].classList.remove('fa-solid');
    $circles[currNdx].classList.add('fa-regular');
    setNdxImageAndDot(4);
  }
}
