/**
 * @file Unit Testing
 */
describe('$.fn.simpleScrollFollow', () => {
  let target;
  beforeEach(() => {
    target = $('<div id="target">').appendTo('body');
  });
  afterEach(() => {
    target.remove();
  });

  it('should return jQuery object', () => {
    const res = target.simpleScrollFollow();
    assert.strictEqual(target, res);
  });

  it('should return jQuery object', () => {
    const res = target.simpleScrollFollow({});
    assert.strictEqual(target, res);
  });

  it('should return jQuery object even if you call public method', () => {
    target.simpleScrollFollow();
    setTimeout(() => {
      const res = target.simpleScrollFollow('setEnabled');
      assert.strictEqual(target, res);
    }, 100);
  });
});