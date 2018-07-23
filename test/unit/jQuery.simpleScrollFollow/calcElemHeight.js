/**
 * @file Unit Testing
 */
describe('$.simpleScrollFollow._calcElemHeight', () => {
  let target;
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
    $(window).off('scroll resize');
  });

  it('should be 64', () => {
    assert.equal($.simpleScrollFollow.prototype._calcElemHeight(target), 64);
  });
});