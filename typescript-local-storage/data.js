'use strict';
let todos = readTodos();
function writeTodos() {
  const todosJSON = JSON.stringify(todos);
  localStorage.setItem('todos-storage', todosJSON);
}
function readTodos() {
  const jsonString = localStorage.getItem('todos-storage');
  if (jsonString) {
    return JSON.parse(jsonString);
  }
  return [];
}
