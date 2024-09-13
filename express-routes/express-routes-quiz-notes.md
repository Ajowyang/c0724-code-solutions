# express-routes-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the conventional HTTP methods for each of the CRUD operations? Is the server required to implement the methods according to this convention?
  POST(Create) GET(Read) PUT(Update) DELETE(delete), no it is not required

- What is Express middleware?
  functions that fulfill the requested action, they're used to process request and response objets, end requests, or call other middleware functions: functions that Express calls in response to requests

- What is Express middleware useful for?
  processing request and response objects, end requests, (anything with requests) and control the flow of request handling, you set up your routes by mounting your middleware

- How do you mount a middleware with an Express application?
  by calling a function like use(Express adds this function to the list of middleware it can work with) or get to add it to the middleware array

- Which objects does an Express application pass to your middleware to manage the request/response lifecycle of the server?
  request and response objects (req, res), the next() function

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
