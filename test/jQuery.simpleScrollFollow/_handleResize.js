/**
 * @file Unit Testing by QUnit 1.x -- $.simpleScrollFollow._handleResize()
 */
jQuery(document).ready(function($) {

  module('$.simpleScrollFollow._handleResize', {
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

  test('()', 2, function() {
    var returns1, returns2;
    var self = this;

    returns1 = this.obj._handleResize();
    equal(typeof returns1, 'number', 'returns1 is number'); // note: timeoutID is Number

    stop();
    setTimeout(function() {
      start();

      returns2 = self.obj._handleResize();
      equal(typeof returns2, 'number', 'returns2 is number'); // scroll the window while former timer is alive

      stop();

      setTimeout(function() {
        start();
        // expire the timer of _handleResize
      }, 200);
    }, 10);
  });

});