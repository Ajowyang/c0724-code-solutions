'use strict';
function handleFocus(event) {
  console.log('focus event was fired');
  const eventTarget = event.target;
  console.log('eventTarget.name:', eventTarget.name);
}
function handleBlur(event) {
  console.log('blur event was fired');
  const eventTarget = event.target;
  console.log('eventTarget.name:', eventTarget.name);
}
function handleInput(event) {
  console.log('input event was fired');
  const eventTarget = event.target;
  console.log(
    ` eventTarget.name: ${eventTarget.name} and eventTarget.value: ${eventTarget.value}`
  );
}
const $userName = document.querySelector('#user-name');
if (!$userName) throw new Error('#user-name query failed!');
const $userEmail = document.querySelector('#user-email');
if (!$userEmail) throw new Error('#user-email query failed!');
const $userMessage = document.querySelector('#user-message');
if (!$userMessage) throw new Error('#user-message query failed!');
$userName.addEventListener('focus', handleFocus);
$userName.addEventListener('blur', handleBlur);
$userName.addEventListener('input', handleInput);
$userEmail.addEventListener('focus', handleFocus);
$userEmail.addEventListener('blur', handleBlur);
$userEmail.addEventListener('input', handleInput);
$userMessage.addEventListener('focus', handleFocus);
$userMessage.addEventListener('blur', handleBlur);
$userMessage.addEventListener('input', handleInput);
