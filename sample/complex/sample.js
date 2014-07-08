jQuery(document).ready(function($) {
	$('#left').simpleScrollFollow({
		min_width: 992,
		limit_elem: $('article')
	});
	
	$('#right').simpleScrollFollow({
		min_width: 992
	});

	var arr_instance = $('#isolated').simpleScrollFollow({
		min_width: 992,
		instance: true,
		limit_elem: $('article')
	});
	$(arr_instance).each(function() {
		var self = this;
		$('#isolated #toggle_scroll').click(function() {
			if ($(this).text() == 'click to disable scroll') {
				self.setEnabled(false);
				$(this).text('click to enable scroll');
			} else {
				self.setEnabled(true);
				$(this).text('click to disable scroll');
			}
		});
	});

});