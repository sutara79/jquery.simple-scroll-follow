/**
 * @file jQuery Plugin: jquery.simple-scroll-follow
 * @version 3.1.2
 * @author Yuusaku Miyazaki <toumin.m7@gmail.com>
 * @license MIT License
 */
import fn_simpleScrollFollow from './fn_simpleScrollFollow';
import simpleScrollFollow    from './simpleScrollFollow';
import methodOther           from './methodOther';
import methodScroll          from './methodScroll';

/*global $*/
/** @external jQuery */
$.fn.simpleScrollFollow = fn_simpleScrollFollow;
$.simpleScrollFollow    = simpleScrollFollow;
$.extend(
  $.simpleScrollFollow.prototype,
  methodOther,
  methodScroll
);