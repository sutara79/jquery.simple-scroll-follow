/**
 * @file Unit Testing by QUnit 1.x -- $.simpleScrollFollow._handleScrollMain()
 */
jQuery(document).ready(function($) {

  module('$.simpleScrollFollow._handleScrollMain', {
    setup: function() {
      $('<div id="target">').css({
        'position': 'absolute',
        'top': 20
      }).appendTo('body');
      this.target = $('#target');
      this.obj = new $.simpleScrollFollow(target);
    },
    teardown: function() {
      this.target.remove();
      delete this.obj;
      $(window).off('scroll resize');
    }
  });

  test('return 1', 1, function() {
    var returns = this.obj._handleScrollMain(
      { // win
        scroll_top: 10,
        scroll_bottom: 0
      },
      { // current
        offset_top: 0,
        offset_bottom: 0
      },
      { // limit
        offset_bottom: 0
      }
    );
    strictEqual(returns, 1);
  });

  test('return 2', 1, function() {
    var returns = this.obj._handleScrollMain(
      { // win
        scroll_top: 1100,
        scroll_bottom: 0
      },
      { // current
        offset_top: 0,
        offset_bottom: 0
      },
      { // limit
        offset_bottom: 10
      }
    );
    strictEqual(returns, 2);
  });

  test('return 3', 1, function() {
    var returns = this.obj._handleScrollMain(
      { // win
        scroll_top: 1100,
        scroll_bottom: 1200
      },
      { // current
        offset_top: 1100,
        offset_bottom: 1150
      },
      { // limit
        offset_bottom: 1110
      }
    );
    strictEqual(returns, 3);
  });

  test('return 4', 1, function() {
    var returns = this.obj._handleScrollMain(
      { // win
        scroll_top: 1100,
        scroll_bottom: 1200
      },
      { // current
        offset_top: 1100,
        offset_bottom: 1150
      },
      { // limit
        offset_bottom: 1200
      }
    );
    strictEqual(returns, 4);
  });

  test('return 5', 1, function() {
    var returns = this.obj._handleScrollMain(
      { // win
        scroll_top: 1100,
        scroll_bottom: 1110
      },
      { // current
        offset_top: 1100,
        offset_bottom: 1150
      },
      { // limit
        offset_bottom: 1105
      }
    );
    strictEqual(returns, 5);
  });

  test('return 6', 1, function() {
    var returns = this.obj._handleScrollMain(
      { // win
        scroll_top: 1100,
        scroll_bottom: 1110
      },
      { // current
        offset_top: 1100,
        offset_bottom: 1150
      },
      { // limit
        offset_bottom: 1110
      }
    );
    strictEqual(returns, 6);
  });

  test('return 7', 1, function() {
    console.log(this.obj.follow.offset_top);
    var returns = this.obj._handleScrollMain(
      { // win
        scroll_top: 1100,
        scroll_bottom: 1110
      },
      { // current
        offset_top: 1100,
        offset_bottom: 3150
      },
      { // limit
        offset_bottom: 2000
      }
    );
    strictEqual(returns, 7);
  });

});