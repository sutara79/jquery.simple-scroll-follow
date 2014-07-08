jQuery(document).ready(function($) {
	var arr_instance = $('aside').simpleScrollFollow({
		instance: true
	});

	$(arr_instance).each(function() {
		var self = this;
		// アンカーのクリックによってスクロールの有効・無効を切り替える
		$('aside #toggle_scroll').click(function() {
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