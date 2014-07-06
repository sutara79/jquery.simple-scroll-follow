jQuery(document).ready(function($) {

	// aside に対してプラグインを適用する
	$('aside').simpleScrollFollow();

	// min_widthを指定する
	$('#set_min_width').simpleScrollFollow({
		min_width: 992,
		limit_elem: $('article')
	});

	// nav に対してプラグインを適用し、処理を追加するためにインスタンスを取得する
	var arr_instance = $('nav').simpleScrollFollow({
		instance: true,
		limit_elem: $('article')
	});
	$(arr_instance).each(function() {
		var self = this;
		// アンカーのクリックによってスクロールの有効・無効を切り替える
		$(self.follow.elem).find('#toggle_scroll').on('click', function() {
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