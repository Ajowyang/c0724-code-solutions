import { read } from './read.js';

// Keep track of app load time so each log message can be timed.
// Log messages should all be approximately 1 second apart.
const startTime = Date.now();
const elapsed = (): string =>
  `${Math.round((Date.now() - startTime) / 1000)}s -`;

async function throwOnce(): Promise<void> {
  try {
    let msg = await read('too', false);
    console.log(elapsed(), 'throwOnce:', msg);
  } catch (error) {
    console.log(elapsed(), 'throwOnce Error:', error);
  }

  // return read('foo', false)
  //   .then((msg) => console.log(elapsed(), 'throwOnce:', msg))
  //   .catch((error) => console.log(elapsed(), 'throwOnce Error:', error));
}

async function throwSeveral(): Promise<void> {
  try {
    let msg: string = await read('foo1', false);
    console.log(elapsed(), 'throwSeveral1:', msg);

    msg = await read('foo2', false);
    console.log(elapsed(), 'throwSeveral2:', msg);

    msg = await read('foo3', false);
    console.log(elapsed(), 'throwSeveral3:', msg);
  } catch (error) {
    console.log(elapsed(), 'throwSeveral Error:', error);
  }

  // return read('foo1', false)
  //   .then((msg) => {
  //     console.log(elapsed(), 'throwSeveral1:', msg);
  //     return read('foo2', false);
  //   })
  //   .then((msg) => {
  //     console.log(elapsed(), 'throwSeveral2:', msg);
  //     return read('foo3', false);
  //   })
  //   .then((msg) => console.log(elapsed(), 'throwSeveral3:', msg))
  //   .catch((error) => console.log(elapsed(), 'throwSeveral Error:', error));
}

async function throwChained(): Promise<void> {
  try {
    let msg1: string = await read('foo-chain', false);
    console.log(elapsed(), 'throwChained1:', msg1);

    let msg2: string = await read(msg1, false);
    console.log(elapsed(), 'throwChained2:', msg2);

    let msg3: string = await read(msg2, false);
    console.log(elapsed(), 'throwChained3:', msg3);
  } catch (error) {
    console.log(elapsed(), 'throwChained Error:', error);
  }

  // return read('foo-chain', false)
  //   .then((msg1) => {
  //     console.log(elapsed(), 'throwChained1:', msg1);
  //     return read(msg1, false);
  //   })
  //   .then((msg2) => {
  //     console.log(elapsed(), 'throwChained2:', msg2);
  //     return read(msg2, false);
  //   })
  //   .then((msg3) => console.log(elapsed(), 'throwChained3:', msg3))
  //   .catch((error) => console.log(elapsed(), 'throwChained Error:', error));
}

throwOnce()
  .then(() => throwSeveral())
  .then(() => throwChained());

// await throwOnce();
// await throwSeveral();
// await throwChained();
// this works too
