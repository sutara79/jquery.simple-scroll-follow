/**
 * @file Unit Testing by QUnit 1.x -- $.simpleScrollFollow._getLowerSide()
 */
$(function() {

  module('$.simpleScrollFollow._getLowerSide', {
    setup: function() {
      this.target = $('<div id="target">').appendTo('body');
    },
    teardown: function() {
      this.target.remove();
      delete this.obj;
      $(window).off('scroll resize');
    }
  });

  test('should equal to lower limit', 1, function() {
    var lower_side = $('<div id="lower-side">')
      .css({
        position: 'absolute',
        bottom: 0
      })
      .appendTo('body');

    this.obj = new $.simpleScrollFollow(this.target, {
      lower_side: lower_side
    });

    var lowerLimitTop = $(lower_side).offset().top;
    var returns = this.obj._getLowerSide();
    strictEqual(returns, lowerLimitTop);
  });

  test('should equal to scrollBottom of window', 1, function() {
    var winScrollBottom = $(window).scrollTop() + $(window).height();
    this.obj = new $.simpleScrollFollow(this.target);
    var returns = this.obj._getLowerSide();
    strictEqual(returns, winScrollBottom);
  });

});