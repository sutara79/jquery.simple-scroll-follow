/**
 * @file Unit Testing
 */
describe('$.simpleScrollFollow._getUpperSide', () => {
  let target, obj;
  beforeEach(() => {
    target = $('<div id="target">')
      .height(50)
      .css({
        'padding-top': 4,
        'padding-bottom': 6,
        'border': '1px solid #f00',
        'border-top-width': 1,
        'border-bottom-width': 3
      })
      .appendTo('body');
  });
  afterEach(() => {
    target.remove();
    obj = null;
    $(window).off('scroll resize');
  });

  it('should be bigger than the scroll top of the window', () => {
    let up = $('<div id="upper-side">')
      .height(50)
      .css({
        'padding-top': 4,
        'padding-bottom': 6,
        'border': '1px solid #f00',
        'border-top-width': 1,
        'border-bottom-width': 3
      })
      .appendTo('body');
    obj = new $.simpleScrollFollow(target, {upper_side: up});
    assert(obj._getUpperSide() > $(window).scrollTop());
    up.remove();
  });

  it('should be equal to the scroll top of the window', () => {
    obj = new $.simpleScrollFollow(target);
    assert.equal(obj._getUpperSide(), $(window).scrollTop());
  });
});