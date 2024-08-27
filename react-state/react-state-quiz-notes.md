# react-state-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are _hooks_ in React?
  functions that allow components to have access to state and other react features, they are used to add state into a component that will be w=persisted across component calls and used to schedule component re-renders

- What are the "Rules of Hooks"? (if necessary, re-read the "Pitfall" box in [State](https://react.dev/learn/state-a-components-memory))
  function must start with use followed by uppercase letter like 'useState', 'useCallback', Hooks can only be called by React components and other hooks, All hooks in a component must be called at the top level of a component

- What is the purpose of state in React?
  to keep track of a status of a certain thing in a component and continually update and render it if needed

- Why can't we just maintain state in a local variable?
  data in local variables dont persist between function calls, prior data is lost

- What two actions happen when you call a `state setter` function?
  the state is updated and the comonent is re rendered

- When does the local `state variable` get updated with the new value?
  after it is re-rendered

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
