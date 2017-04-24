/**
 * @file Unit Testing by QUnit 1.x -- $.simpleScrollFollow.setEnabled()
 */
jQuery(document).ready(function($) {

  module('$.simpleScrollFollow.setEnabled', {
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

  test('()', 1, function() {
    strictEqual(this.obj.setEnabled(), true);
  });

  test('(true)', 1, function() {
    strictEqual(this.obj.setEnabled(true), true);
  });

  test('(false)', 1, function() {
    strictEqual(this.obj.setEnabled(false), false);
  });

});