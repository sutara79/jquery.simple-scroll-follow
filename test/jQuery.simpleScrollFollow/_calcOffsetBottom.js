/**
 * @file Unit Testing by QUnit 1.x -- $.simpleScrollFollow._calcOffsetBottom()
 */
jQuery(document).ready(function($) {

  module('$.simpleScrollFollow._calcOffsetBottom', {
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

  test('(follow.elem)', 1, function() {
    strictEqual(typeof this.obj._calcOffsetBottom(this.obj.follow.elem), 'number');
  });

  test('(option.limit_elem)', 1, function() {
    strictEqual(typeof this.obj._calcOffsetBottom(this.obj.option.limit_elem), 'number');
  });

});