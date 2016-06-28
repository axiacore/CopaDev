(function( $ ) {
  $.fn.headlineAnim = function() {
    var $this = $(this);
    var content = $('.mdl-content');

    $(document).scroll(function() {
      var scrollTop = $(this).scrollTop();
      if ( scrollTop >= (content.offset().top * 0.4) ) {
        $this.removeClass('anim');
      } else {
        $this.addClass('anim');
      }
    });
  }

  $.fn.navSticky = function() {
    var $this = $(this);
    // var headlineHeight = $('.mdl-headline').innerHeight();
    // var navHeight = $this.height();
    var navWidth = $( '.team-nav--ghost').width();
    var content = $('.mdl-content');
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
  $('.team-nav').navSticky();
  $('.mdl-headline').headlineAnim();
});

$(window).resize(function() {
  $('.team-nav').navSticky();
});


// (function( $ ) {
//   $.fn.keepRatio = function() {
//       var $this = $(this);
//       var w = $this.width();
//       var h = $this.height();
//       var nh = $this.width() / 2.4;
//       $this.css('height', nh + 'px');
//   }
// })( jQuery );

// $(document).ready(function(){
//     $('.mdl-headline__pitch-top').keepRatio('width');
// });

// $(window).resize(function() {
//   $('.mdl-headline__pitch-top').keepRatio('width');
// });