# dom-query-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- Why do we log things to the console?
  it helps us debug because we can see values in the console

- What is a "model"?
  a structured representation of a document, in the context of the DOM, it is a tree like model where each html element is its own node that represents part of the document

- Which "document" is being referred to in the phrase Document Object Model?
  the html document

- What is the word "object" referring to in the phrase Document Object Model?
  the content of the web page in object form

- What is a DOM Tree?
  a tree like structure of html elements

- Give two examples of `document` methods that retrieve a single element from the DOM.
  document.getElementById, document.querySelector

- Give one example of a `document` method that retrieves multiple elements from the DOM at once.
  document.querySelectorAll

- Why might you want to assign the return value of a DOM query to a variable?
  because it is faster, once the reference is saved to a variable, the interface doesn't have to search through all of the HTML to get the reference we need

- What `console` method allows you to inspect the properties of a DOM element object?
  console.dir

- Why would a `<script>` tag need to be placed at the bottom of the HTML content instead of at the top?
  the browser needs to parse all of the elements in the HTML page before the js code can access them

- What does `document.querySelector()` take as its argument and what does it return?
  it takes a css selector and returns the first element that matches it

- What does `document.querySelectorAll()` take as its argument and what does it return?
  it takes a css selector and returns a NodeList of all elements in the document that match the css selector

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
