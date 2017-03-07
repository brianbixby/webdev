// $(document).ready(function() {
//   function setHeight() {
//     windowHeight = $(window).innerHeight();
//     windowWidth = $(window).innerWidth();
//     $('#head').css('min-height', (.6*windowHeight));
//     // if(windowWidth > 767) {
//     //   $('#').css('min-height', windowHeight);
//     // }
//   };
//   setHeight();
//
//   $(window).resize(function() {
//     setHeight();
//   });
// });
// $('a').click(function(){
//     $('html, body').animate({
//         scrollTop: $( $(this).attr('href') ).offset().top
//     }, 500);
//     return false;
// });

// var sections = $('section')
//   , nav = $('nav')
//   , nav_height = nav.outerHeight();
//
// $(window).on('scroll', function () {
//   var cur_pos = $(this).scrollTop();
//
//   sections.each(function() {
//     var top = $(this).offset().top - nav_height,
//         bottom = top + $(this).outerHeight();
//
//     if (cur_pos >= top && cur_pos <= bottom) {
//       nav.find('a').removeClass('active');
//       sections.removeClass('active');
//
//       $(this).addClass('active');
//       nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
//     }
//   });
// });
//
// nav.find('a').on('click', function () {
//   var $el = $(this)
//     , id = $el.attr('href');
//
//   $('html, body').animate({
//     scrollTop: $(id).offset().top - nav_height
//   }, 500);
//
//   return false;
// });

// modal
$(".modal-transparent").on('show.bs.modal', function () {
  setTimeout( function() {
    $(".modal-backdrop").addClass("modal-backdrop-transparent");
  }, 0);
});
$(".modal-transparent").on('hidden.bs.modal', function () {
  $(".modal-backdrop").addClass("modal-backdrop-transparent");
});

$(".modal-fullscreen").on('show.bs.modal', function () {
  setTimeout( function() {
    $(".modal-backdrop").addClass("modal-backdrop-fullscreen");
  }, 0);
});
$(".modal-fullscreen").on('hidden.bs.modal', function () {
  $(".modal-backdrop").addClass("modal-backdrop-fullscreen");
});
