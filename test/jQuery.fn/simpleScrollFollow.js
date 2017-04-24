/**
 * @file Unit Testing by QUnit 1.x -- $.fn.simpleScrollFollow()
 */
jQuery(document).ready(function($) {

  module('$.fn.simpleScrollFollow', {
    setup: function() {
      $('<div id="target">').appendTo('body');
      this.target = $('#target');
    },
    teardown: function() {
      this.target.remove();
    }
  });

  test('()', 1, function() {
    var returns = this.target.simpleScrollFollow();
    strictEqual(this.target, returns);
  });

  test('({})', 1, function() {
    var returns = this.target.simpleScrollFollow({});
    strictEqual(this.target, returns);
  });

  test('(\'setEnabled\')', 1, function() {
    var returns = this.target.simpleScrollFollow('setEnabled');
    strictEqual(this.target, returns);
  });

});