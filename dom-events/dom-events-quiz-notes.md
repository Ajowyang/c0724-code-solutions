# dom-events-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- Why do we log things to the console?
  to help us debug and see what values elements hold and what we are interacting with

- What is the purpose of events and event handling?
  so we can create interactive and dynamic web applications, if we want things to happen when actions to take place in the browser we use events and event handling

- Are all possible parameters required to use a JavaScript method or function?
  no

- What method of element objects lets you set up a function to be called when a specific type of event occurs?
  addEventListener()

- What is a callback function?
  a function that will that is passed into another function thats designed to be called by another function

- What object is passed into an event listener callback when the event fires?
  an event object

- What is the `event.target`? If you weren't sure, how would you check? Where could you get more information about it?
  it refers to the element that is responsible for firing the event, if I wasn't sure i could console.log() it

- What is the difference between these two snippets of code?
  ```js
  element.addEventListener('click', handleClick);
  ```
  ```js
  element.addEventListener('click', handleClick());
  ```
  In the top one we are passing the function definition to addEventLister which is correct, the bottom one we are calling the handleClick function which is incorrect, we just want to pass a reference to the function, not pass the result of calling the handleClick function

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
