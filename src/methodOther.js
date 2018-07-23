/*global $*/
/** @lends external:jQuery.simpleScrollFollow.prototype */
export default {
  /**
   * @public
   * @desc スクロールを有効または無効にする
   * @arg {boolean} [bool=true] - true: 有効にする、 false: 無効にする
   * @return {boolean} enabledが変更された値
   */
  setEnabled: function(bool) {
    if (bool === undefined || bool) {
      return this.option.enabled = true;
    } else {
      this._moveDefaultPosition();
      return this.option.enabled = false;
    }
  },

  /**
   * @private
   * @desc 元の位置に戻る
   */
  _moveDefaultPosition: function() {
    // JavaScriptでの追加設定を削除し、CSSで設定した値に戻す
    $(this.follow.elem)
      .css({
        position: '',
        top: '',
        bottom: '',
        left: '',
        right: ''
      })
      .width('');
  },

  /**
   * @private
   * @desc 追尾要素の設定をする
   * @return {Object} - プロパティfollowとなる追尾要素の設定
   */
  _setFollow: function(elem) {
    return this.follow = {
      elem: elem,
      width: $(elem).width(),
      offset_top: $(elem).offset().top,
      offset_bottom: this._calcOffsetBottom(elem),
      offset_left: $(elem).offset().left,

      // topの元の位置を記憶する前に、topの値がautoの場合はゼロに設定する。
      position_top: ($(elem).css('top') == 'auto') ?
        0 :
        Number($(elem).css('top').replace(/px$/, ''))
    };
  },

  /**
   * @private
   * @desc オプションを初期化する
   * @arg {Object} option - オプションを格納した連想配列
   * @return {Object} 単体テストのため、初期化済みのオプションを返す
   */
  _setOption: function(option) {
    this.option = $.extend({
      enabled: true,
      limit_elem: $('body'),
      min_width: 0,
      upper_side: null,
      lower_side: null
    }, option);
    if (typeof this.option.limit_elem == 'string') {
      this.option.limit_elem = $(this.option.limit_elem);
    }
    return this.option;
  },

  /**
   * @private
   * @desc offset_bottomを算出する
   * @arg {Object} elem - 算出する対象のHTML要素
   * @return {number} - 算出されたoffset_bottom
   */
  _calcOffsetBottom: function(elem) {
    return $(elem).offset().top + this._calcElemHeight(elem);
  },

  /**
   * @private
   * @arg {Object} elem - Target element to calc height
   * @return {number} - the height which includes border-width and padding
   */
  _calcElemHeight: function(elem) {
    return $(elem).height() +
           Number($(elem).css('border-top-width'   ).replace(/px$/, '')) +
           Number($(elem).css('border-bottom-width').replace(/px$/, '')) +
           Number($(elem).css('padding-top'        ).replace(/px$/, '')) +
           Number($(elem).css('padding-bottom'     ).replace(/px$/, ''));
  },

  /**
   * @private
   * @desc イベントハンドラ: 画面リサイズ
   * @return {Object} 単体テストのためにthis.timerを返す
   */
  _handleResize: function() {
    if (this.timer !== false) {
      clearTimeout(this.timer);
    }
    var self = this;
    return this.timer = setTimeout(function() {
      self._moveDefaultPosition.call(self);
      self._setFollow.call(self, self.follow.elem);
      $(window).trigger('scroll');
    }, 200);
  }
};