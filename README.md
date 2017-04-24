jquery.simple-scroll-follow
=============================

[![Build Status](https://travis-ci.org/sutara79/jquery.simple-scroll-follow.svg?branch=master)](https://travis-ci.org/sutara79/jquery.simple-scroll-follow)
[![Coverage Status](https://coveralls.io/repos/github/sutara79/jquery.simple-scroll-follow/badge.svg?branch=master)](https://coveralls.io/github/sutara79/jquery.simple-scroll-follow?branch=master)
[![dependencies Status](https://david-dm.org/sutara79/jquery.simple-scroll-follow/status.svg)](https://david-dm.org/sutara79/jquery.simple-scroll-follow)
[![devDependencies Status](https://david-dm.org/sutara79/jquery.simple-scroll-follow/dev-status.svg)](https://david-dm.org/sutara79/jquery.simple-scroll-follow?type=dev)


jQuery plugin to move the element according to the scrolling window.


Demo
-----------------------------

http://sutara79.github.io/jquery.simple-scroll-follow/


Install
-----------------------------
- Clone or download from this repo.


Usage
-----------------------------

###### HTML
```html
<div id="foo">Element to follow</div>

<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
<script src="jquery.simple-scroll-follow.js"></script>
```

###### CSS
```css
body {
  background: url(null) fixed; /* for Google Chrome */
}

#foo {
  position: absolute;
}
```

###### JavaScript
```javascript
$('#foo').simpleScrollFollow();
```

Option
-----------------------------

|name|type|default|description|
|--|--|--|--|
|[limit_elem](http://sutara79.github.io/jquery.simple-scroll-follow/#limit_elem)|Object, string|`$('body')`|Lower limit of target element.|
|[min_width](http://sutara79.github.io/jquery.simple-scroll-follow/#min_width)|number|`0`|When windows width is less narrow than this, this plugin stops.|
|[enabled](http://sutara79.github.io/jquery.simple-scroll-follow/#enabled)|boolean|`true`|If it is `false`, this plugin stops.|


Public Method
-----------------------------

(since v3.0.0)  

- [Detail](http://localhost/gh-pages/jq-plugin/jquery.simple-scroll-follow/#public-method)

### .setEnabled()
##### Parameter

|No.|type|default|description|
|--|--|--|--|
|1|boolean|`true`|`true`: this plugin resumes.<br>`false`: this plugin stops.|


Compatibility
-----------------------------

- jQuery: 3.2
- Browser: Chrome58, Firefox52, IE11, Edge14


License
-----------------------------

[MIT](https://www.opensource.org/licenses/mit-license.php)


Author
-----------------------------

[Yuusaku Miyazaki](http://sutara79.hatenablog.com/entry/2014/06/21/185709)
<toumin.m7@gmail.com>
