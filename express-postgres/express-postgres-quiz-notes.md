# express-postgres-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the purpose of the `pg` NPM package?

- How do you tell `pg` which database to connect to?
  by using the connection string property of the object passed into the Pool constructor

- How do you send SQL to PostgreSQL from your Express server?
  by passing the SQL message as an argument in the database's query() method

- How do you access the rows that get returned from the SQL query?
  by accessing the rows property of the object returned by the SQL query (this object has keys matching the column names)

- What must you always remember to put around your asynchronous route handlers? Why?
  try catch blocks, so you have error handling functionality and you can see the error when it happens

- What is a SQL Injection Attack and how do you avoid it in `pg`?
  by using the parameterized query to put into your SQL

## Notes

All student notes should be written here.

Connection Pool: a list of connections(established from database) that are open that we use to send requests

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
