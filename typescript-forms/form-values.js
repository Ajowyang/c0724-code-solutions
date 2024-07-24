'use strict';
const $contactForm = document.querySelector('#contact-form');
if (!$contactForm) throw new Error('#contact-form query failed');
$contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const $formElements = $contactForm.elements;
  let obj = {
    name: $formElements.name.value,
    email: $formElements.email.value,
    message: $formElements.message.value,
  };
  console.log('object: ', obj);
  $contactForm.reset();
});
