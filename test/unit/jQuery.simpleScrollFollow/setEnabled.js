/**
 * @file Unit Testing
 */
describe('$.simpleScrollFollow.setEnabled', () => {
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

  it('should return true', () => {
    assert.strictEqual(obj.setEnabled(), true);
  });

  it('should return true', () => {
    assert.strictEqual(obj.setEnabled(true), true);
  });

  it('should return false', () => {
    assert.strictEqual(obj.setEnabled(false), false);
  });
});