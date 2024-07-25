const $taskList = document.querySelector('.task-list');
if (!$taskList) throw new Error('task-list query failed');

function callBack(event: Event): void {
  const eventTarget = event.target as HTMLElement;
  console.log('eventTarget:', eventTarget);
  console.log('eventTarget.tagName:', eventTarget.tagName);
  if (eventTarget.tagName === 'BUTTON') {
    const closestTaskListItem = eventTarget.closest(
      '.task-list-item'
    ) as HTMLElement;
    console.log('eventTarget closest task list item:', closestTaskListItem);
    closestTaskListItem.remove();
  }
}

$taskList.addEventListener('click', callBack);
