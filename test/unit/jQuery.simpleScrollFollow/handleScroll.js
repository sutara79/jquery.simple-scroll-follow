/**
 * @file Unit Testing
 */
describe('$.simpleScrollFollow._handleScroll', () => {
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

  it('should be false when option.enabled = false', () => {
    obj.option.enabled = false;
    assert.equal(obj._handleScroll(), false);
  });

  it('should be false when option.min_width = 8000', () => {
    obj.option.min_width = 8000;
    assert.equal(obj._handleScroll(), false);
  });

  it('should be true when no options', () => {
    assert.equal(obj._handleScroll(), true);
  });
});