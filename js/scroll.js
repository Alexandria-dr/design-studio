function init() {
  
  (function ($) {
      $(window).on("load", function () {
        $("#content_1").mCustomScrollbar({
          scrollButtons: { enable: true },
          theme: "rounded",
        });
        console.log("hello");
      });
    })(jQuery);
};
// init()
// barba.hooks.beforeEnter(() => {init(); console.log('hook');})

const mm = window.matchMedia('(min-width: 560px)')
window.addEventListener('load', function () {
 console.log(mm);
 if (mm.matches === true) {
   init() 
   
 }

});