# typescript-async-await-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the `async` and `await` keywords used for?
  for asynchronous functions that return a promise, await is for expressions inside the async function that make promise returning functions behave synchronously

- How do `async` and `await` differ from `Promise.then` and `Promise.catch`?
  they don't use .then

- When do you use `async`?
  when you are dealing with promises and you use it when you need an asynchronous function
- When do you use `await`? When do you _not_ use `await`? (What happens if you `await` a synchronous function?)
  on function calls that might take a while and you want them to run asynchronously, dont want to use it on shorter functions

- How do you handle errors with `await`?
  use a catch block with your await inside of it

- What do `try`, `catch` and `throw` do? When do you use them?
  try is the code that you encase your promise in and that code to run if promise is resolved, catch is the code you want to run with the promise is rejeted, throw is used to thrown an exception

- What happens if you forget to use `await` on a Promise? In that case, what happens to the Promise rejection?
  there will be no rejection being thrown because the promise is still pending since it is thrown immediately

- Which style of asynchronous programming do you prefer — callbacks, `Promise.then`, or `async/await`? Why?

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
