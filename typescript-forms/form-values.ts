interface FormElements extends HTMLFormControlsCollection {
  name: HTMLInputElement;
  email: HTMLInputElement;
  message: HTMLTextAreaElement;
}

const $contactForm = document.querySelector('#contact-form') as HTMLFormElement;
if (!$contactForm) throw new Error('#contact-form query failed');

$contactForm.addEventListener('submit', (event: Event) => {
  event.preventDefault();
  const $formElements = $contactForm.elements as FormElements;

  const obj: object = {
    name: $formElements.name.value,
    email: $formElements.email.value,
    message: $formElements.message.value,
  };
  console.log('object: ', obj);
  $contactForm.reset();
});
