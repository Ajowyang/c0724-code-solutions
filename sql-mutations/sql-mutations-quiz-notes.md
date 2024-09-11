# sql-mutations-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the SQL _CRUD_ operations?
  Create, Read, Update, Delete

- How do you add a row to a SQL table?
  using insert into "table"
  values ('column1', 'column2'.....)

- How do you add multiple rows to a SQL table at once?
  after values and the first () set of column values, use a comma and write another () set of column values

- How do you update rows in a database table?
  update "table"
  set "column" = 'newValue'
  where {condition}

- How do you delete rows from a database table?
  delete from "table'
  where {condition}

- Why is it important to include a `where` clause in your `update` and `delete` statements?
  so you dont update or delete everything

- How do you accidentally delete or update all rows in a table?
  when you don't include a where clause

- How do you get back the modified row without a separate `select` statement?
  returning \*

- Why did you get an error when trying to delete certain films?
  those films may still be referenced by another table that needs them

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
