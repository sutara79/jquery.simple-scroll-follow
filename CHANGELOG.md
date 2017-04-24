# CHANGELOG jquery.simple-scroll-follow
## v3.0.0
#### Option "instance" is deleted.
In v3.x, simpleScrollFollow() always returns jQuery object, so jQuery method chaining always works.

#### How to call public method from outside is Changed.
###### v3.x
```javascript
// apply plugin to an element
$('#foo').simpleScrollFollow();

// call sub-method "setEnabled()"
// the second argument is for sub-method
$('#foo').simpleScrollFollow('setEnabled', false);
```

###### v2.x
```javascript
// set "instance" true
var arrInstance = $('#foo').simpleScrollFollow({
  instance: true
});

// call submethod "setEnabled()"
$(arrInstance).each(function() {
  this.setEnabled(false);
});
```