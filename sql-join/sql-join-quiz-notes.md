# sql-join-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is a foreign key?
  a key in another table

- How do you join two SQL tables? (Provide at least two syntaxes.)
  use join "newTable" using ("key") or join "newTable" on "table"."key" = "newTable"."key"

- How do you temporarily rename columns or tables in a SQL statement?
  use "table"."columnName" as "newColumnName"

- How do you create a one-to-many relationship between two tables?
  by having a foreign key in one table pointing to a primary key in another table

- How do you create a many-to-many relationship between two tables?
  by having a 3rd table that contains a foreign key to one of the tables and another foreign key to the other table

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
