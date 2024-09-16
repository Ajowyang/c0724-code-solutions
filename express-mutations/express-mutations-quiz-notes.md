# express-mutations-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the significance of an HTTP request's method?
  it tells us what action the request is going to do

- What is the significance of an HTTP response's status?
  it tells us what the response was able to do

- What does the express.json() middleware do and when would you need it?
  looks at content type, tries to see if it application/json, if not, it will call next(), if it is, it will grab the body out of the request and convert it into an object by using json.parse() on it and then updates the request

## Notes

All student notes should be written here.

//sample express.json() middleware code

if(!req.header('content-type' === 'application/json) ){
next()
return
}
const json = JSON.parse(req.getBody());
req.body = json;
next();

checks the header section of the request looks for the key 'content-type' if the value associated with that key is not 'application/json, call next() and then return

otherwise, create a variable json that is the evaluated result of the JSON.parse() method if the getBody() method of the request object, the string version body of the request gets parsed into json and set that json as the body of the request (the request is now updated into json format)

'
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
