'use strict';
const books = [
  {
    isbn: 9780333791035,
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
  },
  {
    isbn: 9780151002177,
    title: 'Animal Farm',
    author: 'George Orwell',
  },
  {
    isbn: 9781532148156,
    author: 'Alessandro Ferrari',
    title: 'Pirates of the Caribbean: The Curse of the Black Pearl',
  },
];
console.log('books:', books);
console.log('typeof books:', typeof books);
const arrStr = JSON.stringify(books);
console.log('arrStr:', arrStr);
console.log('typeof arrStr:', typeof arrStr);
const jsonStr = '{"number id": 21223029854158, "name": "DJ Manalang"}';
console.log('jsonStr:', jsonStr);
console.log('typeof jsonStr:', typeof jsonStr);
const parsedJson = JSON.parse(jsonStr);
console.log('parsedJson:', parsedJson);
console.log('typeof parsedJson:', typeof parsedJson);
