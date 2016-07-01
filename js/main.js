(function( $ ) {
  $.fn.headlineAnim = function() {
    var $this = $(this);
    var content = $('.content');

    $(document).scroll(function() {
      var scrollTop = $(this).scrollTop();
      if ( scrollTop >= (content.offset().top * 0.4) ) {
        $this.removeClass('anim');
      } else {
        $this.addClass('anim');
      }
    });
  }

  $.fn.teamNavSticky = function() {
    var $this = $(this);
    var navWidth = $( '.team-nav--ghost').width();
    var content = $('.content');
    var navLeft = content.offset().left - navWidth;


    if ( navLeft >  0 && navWidth > 232 ) {
      $this.addClass('sticky');
      $this.css({
        'width': navWidth - 16,
        'left': navLeft
      });
    } else {
      $this.removeClass('sticky');
      $this.css({
        'width': '100%'
      });
    }
    $(document).scroll(function() {
      var scrollTop = $(this).scrollTop();
      if ( scrollTop >= content.offset().top + 16 && navLeft >  0 && navWidth > 232 ) {
        $this.addClass('fixed');
      } else {
        $this.removeClass('fixed');
      }
    });
  }
})( jQuery );

$(document).ready(function(){
  $('.team-nav').teamNavSticky();
  $('.headline').headlineAnim();
});

$(window).resize(function() {
  $('.team-nav').teamNavSticky();
});
