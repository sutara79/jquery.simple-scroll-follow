/**
 * @file Unit Testing by QUnit 1.x -- $.simpleScrollFollow._calcElemHeight()
 */
jQuery(document).ready(function($) {

  module('$.simpleScrollFollow._calcElemHeight', {
    setup: function() {
      this.target = $('<div id="target">')
        .height(50)
        .css({
          'padding-top': 4,
          'padding-bottom': 6,
          'border': '1px solid #f00',
          'border-top-width': 1,
          'border-bottom-width': 3
        })
        .appendTo('body');
    },
    teardown: function() {
      this.target.remove();
      delete this.obj;
      $(window).off('scroll resize');
    }
  });

  test('Height should be 64', 1, function() {
    var h = $.simpleScrollFollow.prototype._calcElemHeight(this.target);
    ok(h == 64);
  });

});