/** Hero-section animatio */

$('.hero-section').mousemove(function(e){
  var moveX = (e.pageX * -1 / 20);
  var moveY = (e.pageY * -1 / 20);
  $(this).css('background-position', moveX + 'px ' + moveY + 'px ');
})
$(function() {
  $(document).scroll(function() {
        var $nav = $("nav");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});
var scroll = new SmoothScroll('a[href*="#"]', {
speed: 500,
speedAsDuration: true
});
