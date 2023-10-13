// FAQ

const faqItems = document.querySelectorAll('.faq__item');

faqItems.forEach((item) => {
  const faqBtn = item.querySelectorAll;

  item.addEventListener('click', () => {
    const isOpen = item.classList.toggle('open');
    const iconClass = isOpen ? 'ri-substract-fill' : 'ri-arrow-right-s-line';
    const iconElement = faqBtn.querySelector('i');
    iconElement.classList = `${iconClass} text-2xl`
  })
})
