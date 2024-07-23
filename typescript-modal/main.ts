const $openModal = document.querySelector('.open-modal');
if (!$openModal) throw new Error('.open-modal query failed!');
const $dismissModal = document.querySelector('.dismiss-modal');
if (!$dismissModal) throw new Error('.dismiss-modal query failed!');
const $dialog = document.querySelector('dialog');
if (!$dialog) throw new Error('dialog query failed!');

$openModal.addEventListener('click', () => {
  $dialog.show();
});

$dismissModal.addEventListener('click', () => {
  $dialog.close();
});
