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
console.log($circles);

$carouselContainer.addEventListener('click', function (event: Event) {
  console.log(event.target);
  if (event.target === $leftArrow) {
    if (currNdx >= 1) {
      clearCircles();
      setNdxImageAndDot(currNdx - 1);
    } else if (currNdx === 0) {
      clearCircles();
      setNdxImageAndDot(4);
    }
  }

  if (event.target === $rightArrow) {
    if (currNdx <= 3) {
      clearCircles();
      setNdxImageAndDot(currNdx + 1);
    } else if (currNdx === 4) {
      clearCircles();
      setNdxImageAndDot(0);
    }
  }

  if (event.target === $circles[0]) {
    clearCircles();
    setNdxImageAndDot(0);
  }
  if (event.target === $circles[1]) {
    clearCircles();
    setNdxImageAndDot(1);
  }
  if (event.target === $circles[2]) {
    clearCircles();
    setNdxImageAndDot(2);
  }
  if (event.target === $circles[3]) {
    clearCircles();
    setNdxImageAndDot(3);
  }
  if (event.target === $circles[4]) {
    clearCircles();
    setNdxImageAndDot(4);
  }
});

$displayImage.addEventListener('change', function () {
  console.log('change fired');
});

setInterval(function () {
  $circles[currNdx].classList.remove('fa-solid');
  $circles[currNdx].classList.add('fa-regular');
  currNdx++;
  if (currNdx === 5) {
    currNdx = 0;
  }
  $displayImage.setAttribute('src', images[currNdx]);
  $circles[currNdx].classList.remove('fa-regular');
  $circles[currNdx].classList.add('fa-solid');
}, 3000);

function clearCircles(): void {
  for (let i = 0; i < $circles.length; i++) {
    $circles[i].classList.remove('fa-solid');
    $circles[i].classList.add('fa-regular');
  }
}

function setNdxImageAndDot(index: number): void {
  currNdx = index;
  $displayImage.setAttribute('src', images[index]);
  $circles[index].classList.add('fa-solid');
  $circles[index].classList.remove('fa-regular');
}
