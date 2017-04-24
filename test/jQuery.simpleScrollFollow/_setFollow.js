/**
 * @file Unit Testing by QUnit 1.x -- $.simpleScrollFollow._setFollow()
 */
jQuery(document).ready(function($) {

  module('$.simpleScrollFollow._setFollow', {
    setup: function() {
      $('<div id="target">').appendTo('body');
      this.target = $('#target');
      this.obj = new $.simpleScrollFollow(target);
    },
    teardown: function() {
      this.target.remove();
      delete this.obj;
      $(window).off('scroll resize');
    }
  });

  test('(this.target) top = -1', 6, function() {
    this.target.css({
      'position': 'absolute',
      'top': -1
    });
    var returns = this.obj._setFollow(this.target);
    strictEqual(returns.elem, this.target);
    strictEqual(typeof returns.width, 'number');
    strictEqual(typeof returns.offset_top, 'number');
    strictEqual(typeof returns.offset_bottom, 'number');
    strictEqual(typeof returns.offset_left, 'number');
    strictEqual(typeof returns.position_top, 'number');
  });

  test('(this.target) top = "auto"', 1, function() {
    this.target.css('top', 'auto');
    var returns = this.obj._setFollow(this.target)
    strictEqual(returns.position_top, 0);
  });

});