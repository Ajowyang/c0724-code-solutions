'use strict';
let on = false;
const $container = document.querySelector('.container');
if (!$container) throw new Error('.container query failed!');
const $lightbulb = document.querySelector('.lightbulb');
if (!$lightbulb) throw new Error('.lightbulb query failed!');
$container.addEventListener('click', () => {
  if (on === false) {
    on = true;
    $lightbulb.className = 'lightbulb light-on';
    $container.className = 'container background-on';
  } else {
    on = false;
    $lightbulb.className = 'lightbulb light-off';
    $container.className = 'container background-off';
  }
});
