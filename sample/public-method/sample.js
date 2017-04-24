jQuery(document).ready(function($) {
  $('aside').simpleScrollFollow();

  // アンカーのクリックによってスクロールの有効・無効を切り替える
  $('aside #toggle_scroll').click(function() {
    if ($(this).text() == 'click to disable scroll') {
      $('aside').simpleScrollFollow('setEnabled', false);
      $(this).text('click to enable scroll');
    } else {
      $('aside').simpleScrollFollow('setEnabled', true);
      $(this).text('click to disable scroll');
    }
  });
});