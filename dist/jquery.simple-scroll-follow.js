/**
 * @file jQuery Plugin: jquery.simple-scroll-follow
 * @version 3.0.0
 * @author Yuusaku Miyazaki [toumin.m7@gmail.com]
 * @license MIT License
 */
/** @external "jQuery.fn" */
/** @external jQuery */
(function (factory) {
  if(typeof module === 'object' && typeof module.exports === 'object') {
    factory(require('jquery'), window, document);
  } else {
    factory(jQuery, window, document);
  }
}(function($, window, document, undefined) {

/**
 * @public
 * @function external:"jQuery.fn".simpleScrollFollow
 * @arg {null|Object|String} [arg1] - オプション、またはサブメソッド名
 * @arg {boolean} [arg1.enabled=true] - スクロールを有効にするかどうかの真偽値
 * @arg {Object|string} [arg1.limit_elem=$('body')] - 追尾要素のスクロールの下限の基準となる要素のjQueryオブジェクト、またはセレクタ文字列
 * @arg {number} [arg1.min_width=0] - 追尾スクロールを有効にする最低限の画面幅
 * @return {Object} jQueryオブジェクト
 */
$.fn.simpleScrollFollow = function (arg1) {
  var subMethodArgs = Array.prototype.slice.call(arguments, 1);
  return this.each(function() {
    $.fn.simpleScrollFollow.processEach(this, arg1, subMethodArgs);
  });
};

/**
 * @private
 * @arg {Objectt} [elem] - 単一の要素のjQueryオブジェクト
 * @arg {null|Object|String} [arg1] - オプション、またはサブメソッド名
 * @arg {Array} [subMethodArgs] - 追尾要素のスクロールの下限の基準となる要素のjQueryオブジェクト、またはセレクタ文字列
 * @return {string} 単体テスト用に分岐名を返す
 */
$.fn.simpleScrollFollow.processEach = function(elem, arg1, subMethodArgs) {
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

/**
 * @class external:jQuery.simpleScrollFollow
 * @arg {Object} elem - 単一のHTML要素
 * @arg {null|Object} option - オプションを格納した連想配列
 * @prop {Object} option - オプションを格納した連想配列
 * @prop {Object} follow - 追尾要素の情報を格納した連想配列
 * @prop {Object} follow.elem - 追尾するHTML要素のjQueryオブジェクト
 * @prop {number} follow.offset_top - 追尾要素の元々のオフセット・トップ
 * @prop {number} follow.offset_bottom - 追尾要素の元々のオフセット・ボトム
 * @prop {number} follow.offset_left - 追尾要素の元々のオフセット・レフト
 * @prop {number} follow.position_top - 追尾要素の元々のポジション・トップ
 * @prop {number} follow.width - 追尾要素の元々の幅
 * @prop {Object} timer - 連続したリサイズの発火を防ぐための遅延用のタイマー
 */
$.simpleScrollFollow = function(elem, option) {
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
};

$.extend($.simpleScrollFollow.prototype, /** @lends external:jQuery.simpleScrollFollow.prototype */ {
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
      min_width: 0
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
    return $(elem).offset().top +
           $(elem).height() +
           Number($(elem).css('border-top-width'   ).replace(/px$/, '')) +
           Number($(elem).css('border-bottom-width').replace(/px$/, '')) +
           Number($(elem).css('padding-top'        ).replace(/px$/, '')) +
           Number($(elem).css('padding-bottom'     ).replace(/px$/, ''));
  },

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
      scroll_top: $(window).scrollTop(),
      scroll_bottom: $(window).scrollTop() + $(window).height()
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
        top: 0,
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
        bottom: 0,
        left: this.follow.offset_left,
        right: 'auto'
      })
      .width(this.follow.width);
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
});

}));
