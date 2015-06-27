# jquery.simple-scroll-follow
jQuery plugin for following after scrolling window.

## Demo
http://www.usamimi.info/~sutara/sample2/simple-scroll-follow/

## Usage
###### HTML
```html
<div id="foo">Element to follow</div>

<script src="//code.jquery.com/jquery.min.js"></script>
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

## Author
Yuusaku Miyazaki (宮崎 雄策)

- Mail: [toumin.m7@gmail.com](mailto:toumin.m7@gmail.com)
- [Blog](http://sutara79.hatenablog.com/entry/2014/06/21/185709)

## License
[MIT License](http://www.opensource.org/licenses/mit-license.php)