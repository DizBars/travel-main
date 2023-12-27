const navToggle = document.querySelector('.header__nav-toggle');
const navHeader = document.querySelector('.header__nav');
const openToggle = document.querySelector('[data-toggle="is-opened"]');
const closeToggle = document.querySelector('[data-toggle="is-closed"]');
const navList = document.querySelector('.header__nav-list');
const headerLogo = document.querySelector('[data-header="logo"]');
const headerTel = document.querySelector('[data-header="tel"]');
const navButtons = document.querySelectorAll('[data-nav]');

window.addEventListener('resize', () => {
  if (document.documentElement.clientWidth > 1199) {
    navList.style.display = 'flex';
  } else {
    navList.style.display = 'none';
    navButtons.forEach((button) => {
      button.addEventListener('click', () => {
        navHeader.classList.add('header__nav--closed');
        navHeader.classList.remove('header__nav--opened');
        openToggle.style.display = 'none';
        closeToggle.style.display = 'block';
        navList.style.display = 'none';
        headerLogo.style.fill = '#FFFFFF';
        headerTel.style.color = '#FFFFFF';
      });
    });
  }
});

navToggle.addEventListener('click', () => {
  if (document.documentElement.clientWidth > 767) {
    if (navHeader.classList.contains('header__nav--closed')) {
      navHeader.classList.remove('header__nav--closed');
      navHeader.classList.add('header__nav--opened');
      closeToggle.style.display = 'none';
      openToggle.style.display = 'block';
      navList.style.display = 'flex';
      headerLogo.style.fill = '#2D383F';
      headerTel.style.color = '#2D383F';
      headerTel.style.right = '55px';
      navToggle.style.left = '55px';
    } else {
      navHeader.classList.add('header__nav--closed');
      navHeader.classList.remove('header__nav--opened');
      openToggle.style.display = 'none';
      closeToggle.style.display = 'block';
      navList.style.display = 'none';
      headerLogo.style.fill = '#FFFFFF';
      headerTel.style.color = '#FFFFFF';
      headerTel.style.right = '45px';
      navToggle.style.left = '45px';
    }
  } else if (document.documentElement.clientWidth > 320 && document.documentElement.clientWidth < 768) {
    if (navHeader.classList.contains('header__nav--closed')) {
      navHeader.classList.remove('header__nav--closed');
      navHeader.classList.add('header__nav--opened');
      closeToggle.style.display = 'none';
      openToggle.style.display = 'block';
      navList.style.display = 'flex';
      headerLogo.style.fill = '#2D383F';
      headerTel.style.color = '#2D383F';
    } else {
      navHeader.classList.add('header__nav--closed');
      navHeader.classList.remove('header__nav--opened');
      openToggle.style.display = 'none';
      closeToggle.style.display = 'block';
      navList.style.display = 'none';
      headerLogo.style.fill = '#FFFFFF';
      headerTel.style.color = '#FFFFFF';
    }
  }
});
