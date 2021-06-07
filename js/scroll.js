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

// barba.hooks.afterLeave(() => {init()})
// barba.hooks.afterEnter(() => {init()})
// barba.hooks.beforeLeave(() => {init()})
// barba.hooks.beforeEnter(() => {init()})
// barba.hooks.beforeOnce(() => {init()})
// Barba.Dispatcher.on('newPageReady', function (currentStatus, oldStatus, container) {
//   $(container).find('script').each(function (i, script) {
//       var $script = $(script);
//       $.ajax({
//           url: $script.attr('src'),
//           cache: true,
//           dataType: 'script',
//           success: function () {
//               $script.trigger('load');
//           }
//       });
//   });
// });
