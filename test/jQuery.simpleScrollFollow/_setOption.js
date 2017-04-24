/**
 * @file Unit Testing by QUnit 1.x -- $.simpleScrollFollow._setOption()
 */
jQuery(document).ready(function($) {

  module('$.simpleScrollFollow._setOption', {
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
    var returns = this.obj._setOption();
    equal(returns.limit_elem.prop('tagName') , 'BODY');
  });

  test('({limit_elem: "body"}) **string**', 1, function() {
    var returns = this.obj._setOption({limit_elem: "body"});
    equal(returns.limit_elem.prop('tagName') , 'BODY');
  });

});