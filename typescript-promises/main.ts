import { takeAChance } from './take-a-chance.js';
takeAChance('Andrew')
  .then((message: string) => console.log(message))
  .catch((error: Error) => console.error(`Error: ${error.message}`));
