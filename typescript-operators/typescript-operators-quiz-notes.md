# typescript-operators-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the `&&` (logical AND) and `||` (logical OR) operators and how can they be used outside of `if` statements?
  &&(AND) evaluates the 2nd expression only if the first is truthy, ||(OR) evaulates the 2nd expression only if the first one is falsy we can use them to assign values to variables or in methods like console.log()

- What is "short-circuit evaluation" and how does it apply to `&&` and `||`?
  that's when the evaluation of the 2nd operand gets skipped if you can determine the outcome with just the first operand. for &&, we can skip the 2nd one if the first one is falsy, for || we can skip the 2nd one if the first one is truthy

- What is the `??` (nullish coalescing) operator and how does it differ from `||`?
  we return the 2nd operand if the first one is null or undefined, it is different from || because it checks for null or undefined not just falsy

- What is the `?:` (ternary) operator? How does it differ from `if/else`?
  it checks a condition and then evaluates the first expression if it is true other wise it evaluates the 2nd one. They are shorter than if/else statements

- What is the `?.` (optional chaining) operator? When would you use it?
  Optional chaining, we would use it to access variables of an object if we aren't sure if they will have them or not

- What is `...` (spread) syntax? How do you use it with arrays and objects?
  they allow string objects and arrays to be expanded we can use them with arrays and objects like this: ...arrName, ...objName

- What data types can be spread into an array? Into an object?
  Array: string, array, Object: object, string, array

- How does spread syntax differ from rest syntax?
  spread is to expand iterables into individual elements, the rest operator puts the rest of a user's supplied values into the array

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```js
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
