const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

//select
function selectItem(e) {
  removeBorder();
  removeShow();
  // borde
  this.classList.add('tab-border')
  // content item
  const tabContentItem = document.querySelector(`#${this.id}-content`)
  //add showclass
  tabContentItem.classList.add('show')
}

function removeBorder() {
  tabItems.forEach(item => item.classList.remove('tab-border'))
}

function removeShow() {
  tabContentItems.forEach(item => item.classList.remove('show'))
}

//tab click
tabItems.forEach(item => item.addEventListener('click', selectItem));