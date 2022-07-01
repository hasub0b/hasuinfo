
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');

// Display Mobile Menu
const mobileMenu = () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

// Show active menu when scrolling
const highlightMenu = () => {
  const elem = document.querySelector('.highlight');
  const homeMenu = document.querySelector('#home-page');
  const aboutMenu = document.querySelector('#about-page');
  const servicesMenu = document.querySelector('#projects-page');
  let scrollPos = window.scrollY;
  // console.log(scrollPos);

  // adds 'highlight' class to my menu items
  if (window.innerWidth > 960 && scrollPos < 600) {
    homeMenu.classList.add('highlight');
    aboutMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos < 1400) {
    aboutMenu.classList.add('highlight');
    homeMenu.classList.remove('highlight');
    servicesMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos < 2345) {
    servicesMenu.classList.add('highlight');
    aboutMenu.classList.remove('highlight');
    return;
  }

  if ((elem && window.innerWIdth < 960 && scrollPos < 600) || elem) {
    elem.classList.remove('highlight');
  }
};

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

//  Close mobile Menu when clicking on a menu item
const hideMobileMenu = () => {
  const menuBars = document.querySelector('.is-active');
  if (window.innerWidth <= 768 && menuBars) {
    menu.classList.toggle('is-active');
    menuLinks.classList.remove('active');
  }
};

menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);


class Popup {
  classPopupShow =  'popup--show';
  classForBody = 'popup-active';
  popup = null;
  closeOnClickOverlay = false;

  constructor(options = {}) {

    this.closeOnClickOverlay = options?.closeOnClickOverlay || false;
   
    // check if page has vertical scroll
    this.scrollWidthInit();

    document.addEventListener('click', e => {
      
      // open
      if (e.target.dataset.popupOpen) {
        e.preventDefault();
        this.popup = document.getElementById(e.target.dataset.popupOpen);
        this.show();
      }

      // close
      if (e.target.hasAttribute('data-popup-close') ||
         (e.target.closest('.popup__close') && e.target.closest('.popup__close').hasAttribute('data-popup-close')) ||
         (this.closeOnClickOverlay && e.target.classList.contains('popup__content'))
      ){
        e.preventDefault();
        this.hide();
      }
    })
  }

  scrollWidthInit() {

    function existVerticalScroll() {
      let vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0),
          sh =  document.body.scrollHeight;

      return sh > vh ? true : false;
    }

    let div = document.createElement('div');

    div.style.overflowY = 'scroll';
    div.style.width = '50px';
    div.style.height = '50px';

    document.body.append(div);

    let scrollWidth = div.offsetWidth - div.clientWidth;

    div.remove();

    if (existVerticalScroll()) {
      document.documentElement.style.setProperty('--scroll-width', scrollWidth + 'px');
    }
  }

  show() {
    
    if (this.popup) {
      this.popup.classList.add(this.classPopupShow);
    }

    document.body.classList.add(this.classForBody);
  }

  hide() {

    if (this.popup) {
      this.popup.classList.remove(this.classPopupShow);
    }

    document.body.classList.remove(this.classForBody);
  }
}

new Popup({
  closeOnClickOverlay: true, // if you want popup to be closed after click on overlay (default: false)
});


var details = document.querySelector("details")



details.addEventListener("toggle", function() {
  if(details.hasAttribute("open")) {
  }
})
