'use strict';
const $taskList = document.querySelector('.task-list');
if (!$taskList) throw new Error('task-list query failed');
function callBack(event) {
  const eventTarget = event.target;
  console.log('eventTarget:', eventTarget);
  console.log('eventTarget.tagName:', eventTarget.tagName);
  if (eventTarget.tagName === 'BUTTON') {
    let closestTaskListItem = eventTarget.closest('.task-list-item');
    console.log('eventTarget closest task list item:', closestTaskListItem);
    closestTaskListItem.remove();
  }
}
$taskList.addEventListener('click', callBack);
