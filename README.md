# jquery.simpleScrollFollow
jQuery plugin for following after scrolling window.


## Demo
http://www.usamimi.info/~sutara/sample2/simpleScrollFollow/

## JSDoc
http://www.usamimi.info/~sutara/sample2/simpleScrollFollow/JSDoc/


## Usage
###### HTML
```html
<head>
	<link rel="stylesheet" href="style.css">
	<script src="http://code.jquery.com/jquery.min.js"></script>
	<script src="jquery.simpleScrollFollow.1.0.js"></script>
</head>

<body>
	<div id="foo">elements to follow</div>
```

###### CSS
```css
body {
	background: url(null) fixed; /* for Google Chrome */
}

#foo {
	position: absolute; /* or relative */
}
```

###### JavaScript
```javascript
$('#foo').simpleScrollFollow();
```


## License
[MIT License](http://www.opensource.org/licenses/mit-license.php)