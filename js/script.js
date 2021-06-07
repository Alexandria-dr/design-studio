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

        // load your script
        let script = document.createElement('script');
        script.src = './js/home.js'; // location of your draggable js file that is responsible for that image loading and dragging functionality
        next.container.appendChild(script);
        }, 
    },
    // {
    //   namespace: 'portfolio',
    //   beforeEnter({ next2 }) {

    //   // load your script
    //   let script2 = document.createElement('script');
    //   script2.src = './js/scroll.js'; // location of your draggable js file that is responsible for that image loading and dragging functionality
    //   next2.container.appendChild(script2);
    //   script2.src = './scroll/jquery.mCustomScrollbar.concat.min.js';
    //   console.log(script2);
    //   next2.container.appendChild(script2);
    //   }, 
  // }
],
    })

























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