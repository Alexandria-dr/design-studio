barba.use(barbaCss);

barba.init({
  transitions: [
    {
      name: 'home',
        beforeOnce() {  },
        once() { },
        afterOnce() {  },
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
      },],
      views: [{
        namespace: 'home',
        beforeEnter({ next }) {

        let script = document.createElement('script');
        script.src = './js/home.js'; 
        next.container.appendChild(script);
        }, 
    },
    {
      namespace: 'portfolio',
      beforeEnter({ next }) {

      let script = document.createElement('script');
      script.src = './js/scroll.js'; 
      next.body.appendChild(script);
      }, 
  }
],
    })
// barba.hooks.beforeEnter(() => init())
























  //   barba.hooks.afterLeave(() => {init()})
  //   barba.hooks.afterEnter(() => {init()})
  //   barba.hooks.beforeLeave(() => {init()})
  //   barba.hooks.beforeEnter(() => {init()})
  // barba.hooks.beforeOnce(() => {init()})
//   Barba.Dispatcher.on('newPageReady', function (currentStatus, oldStatus, container) {
//     $(container).find('script').each(function (i, script) {
//         var $script = $(script);
//         $.ajax({
//             url: $script.attr('src'),
//             cache: true,
//             dataType: 'script',
//             success: function () {
//                 $script.trigger('load');
//             }
//         });
//     });
// });