const $head = document.querySelector('.message') as HTMLHeadElement;

setTimeout(function () {
  $head.textContent = 'Hello There';
}, 2000);
