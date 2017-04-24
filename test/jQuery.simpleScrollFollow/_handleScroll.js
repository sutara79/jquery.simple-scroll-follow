/**
 * @file Unit Testing by QUnit 1.x -- $.simpleScrollFollow._handleScroll()
 */
jQuery(document).ready(function($) {

  module('$.simpleScrollFollow._handleScroll', {
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

  test('() option.enabled = false', 1, function() {
    this.obj.option.enabled = false;
    strictEqual(this.obj._handleScroll(), false);
  });

  test('() option.min_width = 1000', 1, function() {
    // node_modules/phantomjs/lib/phantom/examples/colorwheel.coffee
    // node_modules/phantomjs/lib/phantom/examples/colorwheel.js
    //     viewportSize = { width: 400, height : 400 }
    this.obj.option.min_width = 1000;
    strictEqual(this.obj._handleScroll(), false);
  });

  test('()', 1, function() {
    strictEqual(this.obj._handleScroll(), true);
  });

});