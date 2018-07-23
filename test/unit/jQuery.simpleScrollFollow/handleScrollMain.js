/**
 * @file Unit Testing
 */
describe('$.simpleScrollFollow._handleScrollMain', () => {
  let target, obj;
  beforeEach(() => {
    target = $('<div id="target">')
      .css({
        'position': 'absolute',
        'top': 20
      })
      .appendTo('body');
    obj = new $.simpleScrollFollow(target);
  });
  afterEach(() => {
    target.remove();
    obj = null;
    $(window).off('scroll resize');
  });

  it('should return 1', () => {
    const res = obj._handleScrollMain(
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
    assert.equal(res, 1);
  });

  it('should return 2', () => {
    const res = obj._handleScrollMain(
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
    assert.equal(res, 2);
  });

  it('should return 3', () => {
    const res = obj._handleScrollMain(
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
    assert.equal(res, 3);
  });

  it('should return 4', () => {
    const res = obj._handleScrollMain(
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
    assert.equal(res, 4);
  });

  it('should return 5', () => {
    const res = obj._handleScrollMain(
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
    assert.equal(res, 5);
  });

  it('should return 6', () => {
    const res = obj._handleScrollMain(
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
    assert.equal(res, 6);
  });

  it('should return 7', () => {
    const res = obj._handleScrollMain(
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
    assert.equal(res, 7);
  });
});