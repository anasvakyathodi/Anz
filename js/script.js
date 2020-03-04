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

window.onload = function() {
  (function() {
    var openComment, styles, time, writeStyleChar, writeStyles;

    styles = "Iam Anas Vakyathodi Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

    openComment = false;

    writeStyleChar = function(which) {
      if (which === '/' && openComment === false) {
        openComment = true;
        styles = $('#style-text').html() + which;
      } else if (which === '/' && openComment === true) {
        openComment = false;
        styles = $('#style-text').html().replace(/(\/[^\/]*\*)$/, '<em class="comment">$1/</em>');
      } else if (which === ':') {
        styles = $('#style-text').html().replace(/([a-zA-Z- ^\n]*)$/, '<em class="key">$1</em>:');
      } else if (which === ';') {
        styles = $('#style-text').html().replace(/([^:]*)$/, '<em class="value">$1</em>;');
      } else if (which === '{') {
        styles = $('#style-text').html().replace(/(.*)$/, '<em class="selector">$1</em>{');
      } else {
        styles = $('#style-text').html() + which;
      }
      $('#style-text').html(styles);
      return $('#style-tag').append(which);
    };

    writeStyles = function(message, index, interval) {
      var pre;
      if (index < message.length) {
        pre = document.getElementById('style-text');
        pre.scrollTop = pre.scrollHeight;
        writeStyleChar(message[index++]);
        return setTimeout((function() {
          return writeStyles(message, index, interval);
        }), interval);
      }
    };

    $('body').append("  <style id=\"style-tag\"></style>\n<span id=\"echo\"></span>\n<span id=\"heart\"><i></i></span>\n<pre id=\"style-text\"></pre>");

    time = window.innerWidth <= 578 ? 20 : 24;

    writeStyles(styles, 0, time);

  }).call(this);
};
