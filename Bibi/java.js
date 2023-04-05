const header = document.querySelector("header");

window.addEventListener ("scroll", function(){
  header.classList.toggle ("sticky", this.window.scrollY > 0);
})

const swiper = new Swiper('.swiper', {
  loop: true,
  pagination: {
      el: '.swiper-pagination',
  },
  autoplay: {
      delay: 3000, // 1 second
  },
  loopAdditionalSlides: 4, // Number of additional slides to loop
});
  
  
            
          
 

  let menu = document.querySelector('#menu-icon');
  let navmenu = document.querySelector('.navmenu');
  
  menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navmenu.classList.toggle('open');
  }
  