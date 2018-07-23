/**
 * @file Unit Testing
 */
describe('$.simpleScrollFollow._setOption', () => {
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

  it('should return limit_elem', () => {
    const res = obj._setOption();
    assert.equal(res.limit_elem.prop('tagName'), 'BODY');
  });

  it('should return limit_elem', () => {
    const res = obj._setOption({limit_elem: 'body'});
    assert.equal(res.limit_elem.prop('tagName'), 'BODY');
  });
});