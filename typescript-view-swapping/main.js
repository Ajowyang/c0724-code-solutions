'use strict';
const $tabs = document.querySelectorAll('.tab');
if (!$tabs) throw new Error('.tab query failed!');
const $tabContainer = document.querySelector('.tab-container');
if (!$tabContainer) throw new Error('.tab-container query failed');
const $views = document.querySelectorAll('.view');
if (!$views) throw new Error('view query failed!');
let currentTabNdx = 0;
$tabContainer.addEventListener('click', (event) => {
  const eventTarget = event.target;
  console.log('eventTarget:', eventTarget);
  if (!(eventTarget.className === 'tab')) {
    console.log('not an inactive tab!');
    return;
  } //if what we clicked on was not a tab, return
  $tabs[currentTabNdx].className = 'tab';
  //previous current tab loses active class
  for (let i = 0; i < $tabs.length; i++) {
    if (event.target === $tabs[i]) {
      $tabs[i].className = 'tab active';
      //new current tab gains active class
      currentTabNdx = i;
      //update current tab index
    }
  }
  const eventTargDataView = eventTarget.dataset.view;
  for (let i = 0; i < $views.length; i++) {
    if (eventTargDataView != $views[i].getAttribute('data-view')) {
      $views[i].className = 'view hidden';
    } else {
      $views[i].className = 'view';
    }
  }
});
