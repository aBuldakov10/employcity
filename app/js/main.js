document.addEventListener('DOMContentLoaded', () => {
  /*** Mobile menu ***/
  const body = document.querySelector('body');
  const header = document.querySelector('header');
  const headerNav = document.querySelector('.js-header-nav');
  const mobBurger = document.querySelector('.js-mob-burger');
  const headerMenu = document.querySelector('.js-header-menu');

  mobBurger.addEventListener('click', () => {
    body.classList.toggle('no-scroll');
    body.classList.toggle('is-blur');
    headerNav.classList.toggle('is-open-menu');
  });

  function setMobMenuPosition() {
    if (window.innerWidth >= 992) {
      headerMenu.setAttribute('style', '');
      return false;
    }

    const headerHeight = header.clientHeight;

    headerMenu.style.top = `${headerHeight}px`;
    headerMenu.style.height = `calc(100vh - ${headerHeight}px)`;
  }

  function hideMobMenu() {
    if (window.innerWidth >= 992) {
      return false;
    }

    body.classList.remove('no-scroll');
    body.classList.remove('is-blur');
    headerNav.classList.remove('is-open-menu');
  }

  function handleMobMenuAction() {
    setMobMenuPosition();
    hideMobMenu();
  }

  window.addEventListener('resize', handleMobMenuAction);
  window.addEventListener('orientationchange', handleMobMenuAction);
});
