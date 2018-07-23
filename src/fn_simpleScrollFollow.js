/**
 * @function external:jQuery.prototype.simpleScrollFollow
 * @arg {Object|String} [arg1] - Options or public method
 * @return {Object} jQuery object
 */
/*global $*/
export default function simpleScrollFollow (arg1) {
  var subMethodArgs = Array.prototype.slice.call(arguments, 1); // Use 2nd argument for public method
  return this.each(function() {
    $.fn.simpleScrollFollow.processEach(this, arg1, subMethodArgs);
  });
}

/**
 * @function external:jQuery.prototype.simpleScrollFollow.processEach
 * @arg {Objectt}       [elem]          - An element
 * @arg {Object|String} [arg1]          - Options or public method
 * @arg {Array}         [subMethodArgs] - Arguments for public method
 * @return {string} Status for unit testing
 */
simpleScrollFollow.processEach = function (elem, arg1, subMethodArgs) {
  var instance = $(elem).data('simple-scroll-follow');
  if (instance && arg1 in instance && arg1.charAt(0) != '_') {
    instance[arg1].apply(instance, subMethodArgs);
    return 'call public method';
  } else if (typeof arg1 === 'object' || !arg1) {
    $(elem).data('simple-scroll-follow', new $.simpleScrollFollow(elem, arg1));
    return 'init plugin';
  } else {
    console.error('Sub-method "' +  arg1 + '" does not exist on $.simpleScrollFollow');
    return 'error';
  }
};