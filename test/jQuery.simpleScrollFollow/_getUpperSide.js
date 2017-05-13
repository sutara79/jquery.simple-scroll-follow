/**
 * @file Unit Testing by QUnit 1.x -- $.simpleScrollFollow._getUpperSide()
 */
$(function() {

  module('$.simpleScrollFollow._getUpperSide', {
    setup: function() {
      this.target = $('<div id="target">').appendTo('body');
    },
    teardown: function() {
      this.target.remove();
      delete this.obj;
      $(window).off('scroll resize');
    }
  });

  test('should be above 0', 1, function() {
    this.upper_side = $('<div id="upper-side">').appendTo('body');
    this.obj = new $.simpleScrollFollow(this.target, {
      upper_side: this.upper_side
    });
    var returns = this.obj._getUpperSide();
    ok(returns > 0);
  });

  test('should be 0', 1, function() {
    this.obj = new $.simpleScrollFollow(this.target);
    var returns = this.obj._getUpperSide();
    ok(returns === 0);
  });

});