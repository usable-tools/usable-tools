

(function() {

  var body = document.querySelector('body')
  var menuTrigger = document.querySelector('#toggle-main-menu-mobile');
  var menuContainer = document.querySelector('#main-menu-mobile');
  var social = 

  menuTrigger.onclick = function() {
      menuContainer.classList.toggle('open');
      menuTrigger.classList.toggle('is-active')
      body.classList.toggle('lock-scroll')
  }

  // $("#main-menu-mobile .has-dropdown").hover(function() {
  //   $(this).find('.dropdown').first().stop(true, true).delay(250).slideDown();
  // }, function() {
  //   $(this).find('.dropdown').first().stop(true, true).delay(100).slideUp()
  // });

})();
