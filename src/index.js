/** @external "jQuery.fn" */
/*global $*/
import fn_simpleScrollFollow from './fn_simpleScrollFollow';
import simpleScrollFollow    from './simpleScrollFollow';
import methodOther           from './methodOther';
import methodScroll          from './methodScroll';

$.fn.simpleScrollFollow = fn_simpleScrollFollow;
$.simpleScrollFollow    = simpleScrollFollow;
$.extend(
  $.simpleScrollFollow.prototype,
  methodOther,
  methodScroll
);