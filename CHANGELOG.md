# Change Log for jquery.simpleScrollFollow

### v2.0.0 (2014-07-08)
- Parameters for public method `.setFollow()` and `.setOption()` was changed.
  (パブリックメソッド `.setFollow()`と`.setOption()`に必要な引数を変更しました。)

- `position: absolute` is required.
  (追尾要素は`position: absolute`が必須となりました。)

### v1.2.0 (2014-07-06)
- Algorithm was modified so that elements followed definitely.
  (要素が正しく追尾するように、追尾の判断基準を修正しました。)
- A screen flickers was prevented on Google Chrome.
  But you should set "body {background: url(null) fixed;}".
  (Google Chromeでスクロールすると画面がちらつく現象を防ぐようにしました。
  ただし、『body {background: url(null) fixed;}』が必須となります。)

### v1.1.1 (2014-06-22)
- Not follow when the distance from the upper limit to the lower limit is shorter than follow element.  
  (上限から下限までの距離が追尾要素の高さよりも低い場合は、当然ながら要素を移動させないようにしました。)

### v1.1.0 (2014-06-22)
- Improved source code to follow.  
  (追随する動作を改善しました。)

### v1.0.0 (2014-06-21)
- Plug-in was exhibited newly.