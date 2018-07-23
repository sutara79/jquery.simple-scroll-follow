/**
 * @file Unit Testing
 */
describe('$.fn.simpleScrollFollow.processEach', () => {
  let target;
  beforeEach(() => {
    target = $('<div id="target">').appendTo('body');
  });
  afterEach(() => {
    target.remove();
  });

  it('should return publick method', () => {
    $.fn.simpleScrollFollow.processEach(target);
    const res = $.fn.simpleScrollFollow.processEach(target, "setEnabled");
    assert.equal(res, 'call public method');
  });

  it('should return init plugin', () => {
    const res = $.fn.simpleScrollFollow.processEach(target);
    assert.equal(res, 'init plugin');
  });

  it('should return init plugin', () => {
    const res = $.fn.simpleScrollFollow.processEach(target, {});
    assert.equal(res, 'init plugin');
  });

  it('should return error because you should init plugin at first', () => {
    const res = $.fn.simpleScrollFollow.processEach(target, "setEnabled");
    assert.equal(res, 'error');
  });

  it('should return error because it is a private method', () => {
    $.fn.simpleScrollFollow.processEach(target);
    const res = $.fn.simpleScrollFollow.processEach(target, "_setOption");
    assert.equal(res, 'error');
  });
});