const $letters = document.querySelectorAll('span');
if (!$letters) throw new Error('span query failed!');

let curNdx: number = 0;

addEventListener('keydown', (event: KeyboardEvent) => {
  const $currentLetter: string | null = $letters[curNdx].textContent;
  // textcontent of current span, which is the current letter we're on
  const keyPressed: string = event.key;
  // key that was pressed
  // console.log(`keydown: ${keyPressed}, textcontent: ${$currentLetter}`);
  if (event.key === 'Shift') {
    console.log('SHIFT');
    return;
  } // shift should not be a wrong character

  if (
    keyPressed === $currentLetter ||
    (keyPressed === String.fromCharCode(32) &&
      $currentLetter === String.fromCharCode(160))
  ) {
    // if the keyPressed is the same as the current letter or if the key pressed is space and the letter is a whitespace entity
    $letters[curNdx].className = 'limegreen-text';
    $letters[curNdx + 1].className = 'underline';
    curNdx++;
  }
  // it is correct, make it green and underline next character, move to next index
  else {
    $letters[curNdx].className = 'red-text underline';
  }
  // otherwise it is wrong, make it red
});
