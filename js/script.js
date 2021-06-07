gsap.registerPlugin(ScrollTrigger);
barba.use(barbaCss);
const hid = document.querySelectorAll('.hidden')
function init(){

  barba.init({
      transitions: [
        {
          name: 'home',
          beforeOnce() {  },
          once() { },
          afterOnce() { if (!hasPlayed) {
            headerAnim()
            hid.forEach(element => {
              element.classList.remove('hidden')          
            });
          } },
        }, 
        {
          name: 'home',
          to: {
            namespace: 'home'
          },
          leave() {},
          enter() {},
        },
        {
          name: 'portfolio',
          to: {
            namespace: 'portfolio'
          },
          leave() { },
          enter() { }
        },]
      })


  let hasPlayed = sessionStorage.getItem("hasMyAnimationPlayed");
  if (hasPlayed){
    hid.forEach(element => {
      element.classList.remove('hidden')          
  })}

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

(function(){
    var body = document.querySelector('.features'),
        startX = -100,
        startY = -100,
        w = document.documentElement.offsetWidth,
        h = document.documentElement.offsetHeight;
        
        body.addEventListener('mousemove', function(evt){
          var posX = Math.round(evt.clientX / w * startX)
          var posY = Math.round(evt.clientY / h * startY)
          body.style.backgroundPosition = posX + 'px ' + posY + 'px'
        })
      })();
      
      // gsap
      
      // ScrollTrigger.defaults({
      //     markers:true
      //   })
        
  function hide(element) {
    gsap.set(element, {opacity: 0, duration: 0.5});
  }

  function fromLeft(element, x, x2, o1, o2) {tl2.fromTo(element,  {x: x, opacity:o1, }, {
    x: x2,
    opacity: o2,
    duration: 0.4,
    },)  
  }
        
  const gsapLeft = document.querySelectorAll('.gsap_left')
  
  let tl = gsap.timeline({ duration: 0.5, delay: 0.1,  onComplete: ()=>{sessionStorage.setItem("hasMyAnimationPlayed", true);} });
  let tl2 = gsap.timeline({ duration: 0.3,});

  function fromBottom(element, y, y2, o1, o2) {gsap.fromTo(element,  {y: y, opacity:o1, }, {
    y: y2,
    opacity: o2,
    duration: 0.4,
  },)  
}

const gsapUp = document.querySelectorAll('.gsap_up')
const opacity_item = document.querySelectorAll('.gsap_opacity')

function gsapOpacity(element, o, o1) {
  gsap.fromTo(element, { opacity:o, }, {
    opacity: o1,
    duration: 0.5
  },)}  

  function headerAnim() {
    tl
      .fromTo(".header__desc h1", { x: -100, opacity: 0, }, {
        opacity: 1,
        x: 0
      })
      .fromTo([".header__desc p"], { x: -100, opacity: 0, }, {
        opacity: 1,
        x: 0,
      })
      .fromTo(".header__desc a", {opacity:0},{duration: 0.2, opacity:1})
      .fromTo("nav", { opacity: 0, }, {
        opacity: 1,
      })
      .fromTo(".header__container img", {opacity:0},{opacity:1,});
  }

  

  opacity_item.forEach(function(element){
    hide(element);
    ScrollTrigger.create({
      start: 'top-=250 center',
      end: 'bottom top',
      trigger: element,
      onEnter: function() {gsapOpacity(element, 0, 1)},
      // onLeaveBack: function() {gsapOpacity(element, 1, 0)},
      onLeaveBack: self => self.disable()
  })})

 
gsapUp.forEach(function(element){
  hide(element);
  ScrollTrigger.create({
    start: 'top-=260 center',
    end: 'bottom top',
    trigger: element,
    onEnter: function() {fromBottom(element, 200, 0, 0, 1)},
    // onLeaveBack: function() {fromBottom(element, 0, 200, 1, 0)},
    onLeaveBack: self => self.disable()
  })})


gsapLeft.forEach(function(element){
  hide(element);
  ScrollTrigger.create({
    start: 'top-=200 center',
    end: 'bottom top',
    trigger: element,
    onEnter: function() {fromLeft(element, -200, 0, 0, 1)},
    // onLeaveBack: function() {fromLeft(element, 0, -200, 1, 0)},
    onLeaveBack: self => self.disable()
  })})


ScrollTrigger.create({
  trigger:'.creative__desc',
  start: 'top-=50 center',
    end: 'bottom top',
    onEnter: ()=>
    {
        tl2
        .fromTo(".creative__desc p.title", { x: -100, opacity: 0, }, {
          opacity: 1,
          x: 0
        })
        .fromTo(".creative__desc p.text", { x: -100, opacity: 0, }, {
          opacity: 1,
          x: 0
        })
        .fromTo(".creative__desc a", { opacity: 0, }, {
          opacity: 1,
        });},
    // onLeaveBack: ()=> {gsap.fromTo([".creative__desc p.title",".creative__desc p.text",".creative__desc a"],{opacity:1},{opacity:0, duration:0.5})}
    onLeaveBack: self => self.disable()
})

}
window.addEventListener('load', function () {
  init();
})