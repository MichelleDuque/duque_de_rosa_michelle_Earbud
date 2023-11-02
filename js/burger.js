(() => {
    
const menu_btn = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.mobile-nav');
const hamburger_image = document.querySelector("#hamburger-image");
const mobile_nav = document.querySelector(".mobile-nav")

menu_btn.addEventListener('click', function () {
  menu_btn.classList.toggle('is-active');
  mobile_menu.classList.toggle('is-active');
  if (menu_btn.classList.contains("is-active")){
    hamburger_image.src = "images/close_menu2.png";
  } else{
    hamburger_image.src = "images/burger_menu_2.png";
  }
});


mobile_nav.addEventListener('click', function () {
  menu_btn.classList.toggle('is-active');
  mobile_menu.classList.toggle('is-active');
  if (menu_btn.classList.contains("is-active")){
    hamburger_image.src = "images/close_menu2.png";
  } else{
    hamburger_image.src = "images/burger_menu_2.png";
  }
});


})();