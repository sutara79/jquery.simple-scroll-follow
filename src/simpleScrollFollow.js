/**
 * @class external:jQuery.simpleScrollFollow
 * @arg {object}        elem - An element
 * @arg {null|object}   option - Options
 * @arg {object|string} [option.limit_elem=$('body')] - An element that indicates lower limit to scroll
 * @arg {number}        [option.min_width=0]          - Minimum window width to enable this plugin
 * @arg {boolean}       [option.enabled=true]         - Enable scroll or not
 * @arg {string}        [option.upper_side=null]      - An fixed element that indicates upper limit to scroll
 * @arg {string}        [option.lower_side=null]      - An fixed element that indicates lower limit to scroll
 * @prop {Object} option - Options
 * @prop {Object} follow - 追尾要素の情報を格納した連想配列
 * @prop {Object} follow.elem - 追尾するHTML要素のjQueryオブジェクト
 * @prop {number} follow.offset_top - 追尾要素の元々のオフセット・トップ
 * @prop {number} follow.offset_bottom - 追尾要素の元々のオフセット・ボトム
 * @prop {number} follow.offset_left - 追尾要素の元々のオフセット・レフト
 * @prop {number} follow.position_top - 追尾要素の元々のポジション・トップ
 * @prop {number} follow.width - 追尾要素の元々の幅
 * @prop {Object} timer - 連続したリサイズの発火を防ぐための遅延用のタイマー
 */
/*global $*/
export default function (elem, option) {
  this._setOption(option);
  this._setFollow(elem);

  var self = this;

  // 画面スクロール
  $(window).scroll(function() {
    self._handleScroll.call(self);
  });

  // 画面リサイズ
  this.timer = false;
  $(window).resize(function() {
    self._handleResize.call(self);
  });
}