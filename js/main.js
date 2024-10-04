let sidebarPage = document.querySelector(".sidebarPage");
let toggleSpan = document.querySelector('.sidebarPage .icon');

toggleSpan.onclick = function () {
  sidebarPage.classList.toggle('small-sidebar');

  if (toggleSpan.classList.contains("icon-close-sidebar")) {
    toggleSpan.classList.remove('icon-close-sidebar');
    toggleSpan.classList.add('icon-open-sidebar');
    localStorage.setItem('isSamll', 'yes')
  } else {
    toggleSpan.classList.remove('icon-open-sidebar');
    toggleSpan.classList.add('icon-close-sidebar');
    localStorage.setItem('isSamll', 'no')
  }
}

if (localStorage.getItem('isSamll') === 'yes') {
  sidebarPage.classList.add('small-sidebar');
  toggleSpan.classList.remove('icon-close-sidebar');
  toggleSpan.classList.add('icon-open-sidebar');
} else {
  sidebarPage.classList.remove('small-sidebar');
  toggleSpan.classList.remove('icon-open-sidebar');
  toggleSpan.classList.add('icon-close-sidebar');
}