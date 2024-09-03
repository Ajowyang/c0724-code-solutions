# react-effects-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- When is a component "mounted" to the DOM?
  when it gets rendered and added to the DOM

- What is a React Effect?
  some kind of extra code you want to run after the component mounts and displays on the screen such as: Fetching data from a server, Setting up a timer, Subscribing to external services, Cleaning up resources when the component is removed.

- When should you use an Effect and when should you not use an Effect?
  You should use them when you fetch data from an API or server, you shouldn't use them to directly set state or on non asynchronous calculations

- When do Effects run?
  After the component is initially rendered

- What function is used to declare an Effect?
  useEffect

- What are Effect dependencies and how do you declare them?
  variables that the effect function relies on

- Why would you want to clean up from an Effect?
  to prevent memory leaks, avoid unintended behaviors

- How do you clean up from an Effect?
  return a cleanup function from the effect callback

- When does the cleanup function run?
  Before the effect runs again, when the component unmounts, when dependencies change

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
