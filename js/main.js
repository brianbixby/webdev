$(document).ready(function() {
  function setHeight() {
    windowHeight = $(window).innerHeight();
    windowWidth = $(window).innerWidth();
    $('#head').css('min-height', (.6*windowHeight));
    // if(windowWidth > 767) {
    //   $('#').css('min-height', windowHeight);
    // }
  };
  setHeight();

  $(window).resize(function() {
    setHeight();
  });
});
