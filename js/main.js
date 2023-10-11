// Mobile nav
const mobileNav = document.querySelector(".mnav");
const closeBtn = document.querySelector(".mnav__close-btn");
const closeBtnIcn = document.querySelector(".mnav__close-btn-icon");

const navOpenedClass = "left-0";
const navClosedClass = "-left-[300px]";
const arrowLeftClass = "ri-arrow-left-s-line";
const arrowRightClass = "ri-arrow-right-s-line";

closeBtn.addEventListener("click", () => {
  if (mobileNav.classList.contains(navClosedClass)) {
    mobileNav.classList.toggle(navOpenedClass);

    closeBtnIcn.classList.toggle(arrowLeftClass);
    closeBtnIcn.classList.toggle(arrowRightClass);
  }
});


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
