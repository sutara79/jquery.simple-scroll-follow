/**
 * @file Unit Testing
 */
describe('$.simpleScrollFollow._getLowerSide', () => {
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

  it('should equal to lower limit', () => {
    let lower_side = $('<div id="lower-side">')
      .css({
        position: 'absolute',
        bottom: 0
      })
      .appendTo('body');
    obj = new $.simpleScrollFollow(target, {
      lower_side: lower_side
    });
    assert.equal(
      obj._getLowerSide(),
      $(lower_side).offset().top
    );
    lower_side.remove();
  });

  it('should equal to scrollBottom of window', () => {
    obj = new $.simpleScrollFollow(target);
    assert.equal(
      obj._getLowerSide(),
      $(window).scrollTop() + $(window).height()
    );
  });
});