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
init()
barba.hooks.beforeEnter(() => {init(); console.log('hook');})
