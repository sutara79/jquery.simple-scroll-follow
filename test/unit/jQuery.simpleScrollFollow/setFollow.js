/**
 * @file Unit Testing
 */
describe('$.simpleScrollFollow._setFollow', () => {
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
    obj = new $.simpleScrollFollow(target);
  });
  afterEach(() => {
    target.remove();
    obj = null;
    $(window).off('scroll resize');
  });

  it('should return viewport', () => {
    target.css({
      'position': 'absolute',
      'top': -1
    });
    const res = obj._setFollow(target);
    assert.equal(res.elem, target);
    assert.equal(typeof res.width, 'number');
    assert.equal(typeof res.offset_top, 'number');
    assert.equal(typeof res.offset_bottom, 'number');
    assert.equal(typeof res.offset_left, 'number');
    assert.equal(typeof res.position_top, 'number');
  });

  it('should return 0 if value is auto', () => {
    target.css('top', 'auto');
    const res = obj._setFollow(target)
    assert.equal(res.position_top, 0);
  });
});