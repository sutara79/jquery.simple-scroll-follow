/**
 * @file Unit Testing
 */
describe('$.simpleScrollFollow._getPositionToStickToWindow', () => {
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

  it('should be 64', () => {
    const h = $.simpleScrollFollow.prototype._getPositionToStickToWindow(target);
    assert.equal(h, 64);
  });

  it('should be 0', () => {
    const h = $.simpleScrollFollow.prototype._getPositionToStickToWindow(null);
    assert.equal(h, 0);
  });
});