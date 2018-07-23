/**
 * @file Unit Testing
 */
describe('$.simpleScrollFollow._handleResize', () => {
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

  it('should return number', async () => {
    await new Promise(resolve => {
      setTimeout(() => {
        assert.equal(typeof this.obj._handleResize(), 'number'); // note: timeoutID is Number
        resolve();
      }, 210);
    });
    await assert.equal(typeof this.obj._handleResize(), 'number');
  });
});