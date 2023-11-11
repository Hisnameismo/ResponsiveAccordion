const accordionContent = document.querySelectorAll('.accordion-content');
accordionContent.forEach((item, index) => {
  let header = item.querySelector('header');
  header.addEventListener('click', () => {
    item.classList.toggle('open');
    let description = item.querySelector('.description');
    let icon = item.querySelector('.fa-angle-down');
    if (item.classList.contains('open')) {
      description.style.height = `${description.scrollHeight + 10}px`;
      icon.style.transform = 'rotate(180deg)';
    } else {
      description.style.height = '0px';
      icon.style.transform = 'rotate(0deg)';
    }
    removeOpen(index);
  });
});
function removeOpen(index1) {
  accordionContent.forEach((item2, index2) => {
    if (index1 != index2) {
      item2.classList.remove('open');
      let des = item2.querySelector('.description');
      des.style.height = '0px';
    }
  });
}
