const navButton = document.querySelector('.nav__burger');
navButton.addEventListener('click', e => {
    navButton.classList.toggle('active');
    document.querySelector('.nav__menu').classList.toggle('active');
    document.querySelector('body').classList.toggle('lock')
})

const header = document.querySelector('nav');
function toggleTopMenu (){
    if (pageYOffset > 30) {
      header.classList.add('is-scroll')}
       else
      {header.classList.remove('is-scroll')}
      }
  window.addEventListener('scroll', toggleTopMenu);