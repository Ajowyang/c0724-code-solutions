# dom-event-delegation-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the `event.target`?
  event.target is the element where the event occured at

- Why is it possible to listen for events on one element that actually happen its descendent elements?
  because of event bubbling, the event trigger starts on the deepest element that was clicked first before bubbling up through its ancestors in the hierarchy
- What DOM element property tells you what type of element it is?
  tagName
- What does the `element.closest()` method take as its argument and what does it return?
  it takes in a class name and returns the closest ancestor element

- How can you remove an element from the DOM?
  using the element's .remove() method

- If you wanted to insert new clickable DOM elements into the page using JavaScript, how could you avoid adding an event listener to every new element individually?
  add an event listener to parent element and then append children to that element

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
