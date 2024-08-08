import { read } from './read.js';

// Keep track of app load time so each log message can be timed.
// Log messages should all be approximately 1 second apart.
const startTime = Date.now();
const elapsed = (): string =>
  `${Math.round((Date.now() - startTime) / 1000)}s -`;

async function readOnce(): Promise<void> {
  let msg = await read('foo/bar.html');
  console.log(elapsed(), 'readOnce:', msg);

  // return read('foo/bar.html').then((msg) =>
  //   console.log(elapsed(), 'readOnce:', msg)
  // );
}

async function readSeveral(): Promise<void> {
  let msg: string = await read('foo1/bar.html');
  console.log(elapsed(), 'readSeveral1:', msg);

  msg = await read('foo2/bar.html');
  console.log(elapsed(), 'readSeveral2:', msg);

  msg = await read('foo3/bar.html');
  console.log(elapsed(), 'readSeveral3:', msg);

  // return read('foo1/bar.html')
  //   .then((msg) => {
  //     console.log(elapsed(), 'readSeveral1:', msg);
  //     return read('foo2/bar.html');
  //   })
  //   .then((msg) => {
  //     console.log(elapsed(), 'readSeveral2:', msg);
  //     return read('foo3/bar.html');
  //   })
  //   .then((msg) => console.log(elapsed(), 'readSeveral3:', msg));
}

async function readChained(): Promise<void> {
  let msg1: string = await read('foo-chain/bar.html');
  console.log(elapsed(), 'readChained1:', msg1);

  let msg2: string = await read(msg1);
  console.log(elapsed(), 'readChained2:', msg2);

  let msg3: string = await read(msg2);
  console.log(elapsed(), 'readChained3:', msg3);

  // return read('foo-chain/bar.html')
  //   .then((msg1) => {
  //     console.log(elapsed(), 'readChained1:', msg1);
  //     return read(msg1);
  //   })
  //   .then((msg2) => {
  //     console.log(elapsed(), 'readChained2:', msg2);
  //     return read(msg2);
  //   })
  //   .then((msg3) => console.log(elapsed(), 'readChained3:', msg3));
}

readOnce()
  .then(() => readSeveral())
  .then(() => readChained());
