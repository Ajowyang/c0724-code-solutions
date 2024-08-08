import { read } from './read.js';

// Keep track of app load time so each log message can be timed.
// Log messages should all be approximately 1 second apart.
const startTime = Date.now();
const elapsed = (): string =>
  `${Math.round((Date.now() - startTime) / 1000)}s -`;

async function throwOnce(): Promise<void> {
  let msg = await read('too', false);
  console.log(elapsed(), 'throwOnce:', msg);
}

async function throwSeveral(): Promise<void> {
  let msg: string = await read('foo1', false);
  console.log(elapsed(), 'throwSeveral1:', msg);

  msg = await read('foo2', false);
  console.log(elapsed(), 'throwSeveral2:', msg);

  msg = await read('foo3', false);
  console.log(elapsed(), 'throwSeveral3:', msg);
}

async function throwChained(): Promise<void> {
  let msg1: string = await read('foo-chain', false);
  console.log(elapsed(), 'throwChained1:', msg1);

  let msg2: string = await read(msg1, false);
  console.log(elapsed(), 'throwChained2:', msg2);

  let msg3: string = await read(msg2, false);
  console.log(elapsed(), 'throwChained3:', msg3);
}
try {
  await throwOnce();
  await throwSeveral();
  await throwChained();
} catch (error) {
  console.log(`Error: ${error}`);
}
//can't use .then in try catch block
