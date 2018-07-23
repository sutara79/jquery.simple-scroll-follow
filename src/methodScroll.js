/*global $*/
/** @lends external:jQuery.simpleScrollFollow.prototype */
export default {
  /**
   * @private
   * @desc イベントハンドラ: 画面スクロール
   * @return {boolean} 画面スクロールが実行されたかどうか
   */
  _handleScroll: function() {
    // スクロールが無効の場合は即座に終了する
    if (!this.option.enabled) {
      return false;
    }

    // 最低幅を下回る場合は即座に終了する
    if ($(window).width() < this.option.min_width) {
      this._moveDefaultPosition.call(this);
      return false;
    }

    // 画面の上端、下端を取得
    var win = {
      scroll_top: this._getUpperSide(),
      scroll_bottom: this._getLowerSide()
    };

    // 追尾要素の "現在の" 上端、下端を取得
    var current = {
      offset_top: $(this.follow.elem).offset().top,
      offset_bottom: this._calcOffsetBottom(this.follow.elem)
    };

    // 下限要素の下端を取得
    var limit = {offset_bottom: this._calcOffsetBottom(this.option.limit_elem)};

    // 下限 - 上限が要素高より低ければ即座に終了する
    if ((limit.offset_bottom - this.follow.offset_top) < (current.offset_bottom - current.offset_top)) {
      return false;
    }
    this._handleScrollMain(win, current, limit);
    return true;
  },

  /**
   * @private
   * @returns {number} Upper side of window
   */
  _getUpperSide: function() {
    var winScrollTop = $(window).scrollTop();
    if (this.option.upper_side) {
      var upperLimitBottom = this._calcOffsetBottom(this.option.upper_side);
      if (winScrollTop < upperLimitBottom) {
        winScrollTop = upperLimitBottom;
      }
    }
    return winScrollTop;
  },

  /**
   * @private
   * @returns {number} Lower side of window
   */
  _getLowerSide: function() {
    var winScrollBottom = $(window).scrollTop() + $(window).height();
    if (this.option.lower_side) {
      var lowerLimitTop = $(this.option.lower_side).offset().top;
      if (winScrollBottom > lowerLimitTop) {
        winScrollBottom = lowerLimitTop;
      }
    }
    return winScrollBottom;
  },

  /**
   * @private
   * @desc イベントハンドラ: 画面スクロール
   * @arg {Object} win - 画面の上端、下端
   * @arg {Object} current - 追尾要素の "現在の" 上端、下端
   * @arg {Object} limit - 下限要素の下端
   * @return {number} 実行された分岐の番号
   */
  _handleScrollMain: function(win, current, limit) {
    // ! 「positionのtop」 と 「offsetのtop」 を混同しないように

    /* 分岐の構造
    if (画面上辺は上限より上か?) {
      要素上端は上限へ
    } else if (画面上辺は下限より下か?) {
      要素下端は下限へ
    } else if (画面高は要素高より高いか?) {
      if (下限 - 画面上辺は要素高より短いか?) {
        要素下端は下限へ
      } else {
        要素上端は画面上辺へ
      }
    } else {
      if (画面下辺は下限より下か?) {
        要素下端は下限へ
      } else if (画面下辺 - 上限 は、要素高より長いか?) {
        要素下端は画面下辺へ
      } else {
        要素上端は上限へ
      }
    }
    */
    if (win.scroll_top  < this.follow.offset_top) { // 画面上辺は上限より上か?
      this._move1(); // absolute: 要素上端は上限へ
      return 1;
    } else if (win.scroll_top > limit.offset_bottom) { // 画面上辺は下限より下か?
      this._move2(current, limit); // absolute: 要素下端は下限へ
      return 2;
    } else if ((win.scroll_bottom - win.scroll_top) > (current.offset_bottom - current.offset_top)) { // 画面高は要素高より高いか?
      if ((limit.offset_bottom - win.scroll_top) < (current.offset_bottom - current.offset_top)) { // 下限 - 画面上辺 は、要素高より短いか?
        this._move2(current, limit); // absolute: 要素下端は下限へ
        return 3;
      } else {
        this._move3(); // fixed: 要素上端は画面上辺へ
        return 4;
      }
    } else {
      if (win.scroll_bottom > limit.offset_bottom) { // 画面下辺は下限より下か?
        this._move2(current, limit); // absolute: 要素下端は下限へ
        return 5;
      } else if ((win.scroll_bottom - this.follow.offset_top) > (current.offset_bottom - current.offset_top)) { // 画面下辺 - 上限 は、要素高より長いか?
        this._move4(); // fixed: 要素下端は画面下辺へ
        return 6;
      } else {
        this._move1(); // absolute: 要素上端は上限へ
        return 7;
      }
    }
  },

  /**
   * @private
   * @desc absolute: 要素上端は上限へ
   */
  _move1: function() {
    $(this.follow.elem)
      .css({
        position: 'absolute',
        top: '',
        bottom: '',
        left: '',
        right: ''
      })
      .width(this.follow.width);
  },

  /**
   * @private
   * @desc absolute: 要素下端は下限へ
   * @arg {Object} current - 追尾要素の "現在の" 上端、下端
   * @arg {Object} limit - 下限要素の下端
   */
  _move2: function(current, limit) {
    $(this.follow.elem)
      .css({
        position: 'absolute',
        top: limit.offset_bottom - this.follow.offset_top - (current.offset_bottom - current.offset_top) + this.follow.position_top,
        bottom: 'auto',
        left: '',
        right: ''
      })
      .width(this.follow.width);
  },

  /**
   * @private
   * @desc fixed: 要素上端は画面上辺へ
   */
  _move3: function() {
    $(this.follow.elem)
      .css({
        position: 'fixed',
        top: this._getPositionToStickToWindow(this.option.upper_side),
        bottom: 'auto',
        left: this.follow.offset_left,
        right: 'auto'
      })
      .width(this.follow.width);
  },

  /**
   * @private
   * @desc fixed: 要素下端は画面下辺へ
   */
  _move4: function() {
    $(this.follow.elem)
      .css({
        position: 'fixed',
        top: 'auto',
        bottom: this._getPositionToStickToWindow(this.option.lower_side),
        left: this.follow.offset_left,
        right: 'auto'
      })
      .width(this.follow.width);
  },

  /**
   * @private
   * @arg {object} limit - this.option.upper_side or this.option.lower_side
   * @returns {number} position-top/bottom to stick to window
   */
  _getPositionToStickToWindow: function(limit) {
    if (limit) {
      return this._calcElemHeight(limit);
    } else {
      return 0;
    }
  }
};