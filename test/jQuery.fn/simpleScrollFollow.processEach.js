/**
 * @file Unit Testing by QUnit 1.x -- $.fn.simpleScrollFollow.processEach()
 */
jQuery(document).ready(function($) {

  module('$.fn.simpleScrollFollow.processEach', {
    setup: function() {
      $('<div id="target">').appendTo('body');
      this.target = $('#target');
    },
    teardown: function() {
      this.target.remove();
    }
  });

  test('(this.target, "setEnabled") **again**', 1, function() {
    $.fn.simpleScrollFollow.processEach(this.target);
    var returns = $.fn.simpleScrollFollow.processEach(this.target, "setEnabled");
    equal(returns, 'call public method');
  });

  test('(this.target)', 1, function() {
    var returns = $.fn.simpleScrollFollow.processEach(this.target);
    equal(returns, 'init plugin');
  });

  test('(this.target, {})', 1, function() {
    var returns = $.fn.simpleScrollFollow.processEach(this.target, {});
    equal(returns, 'init plugin');
  });

  test('(this.target, "setEnabled") **single**', 1, function() {
    var returns = $.fn.simpleScrollFollow.processEach(this.target, "setEnabled");
    equal(returns, 'error');
  });

  test('(this.target, "_setOption") **again**', 1, function() {
    $.fn.simpleScrollFollow.processEach(this.target);
    var returns = $.fn.simpleScrollFollow.processEach(this.target, "_setOption");
    equal(returns, 'error');
  });

});