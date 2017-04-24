jQuery(document).ready(function($) {
  $('#left').simpleScrollFollow({
    min_width: 992,
    limit_elem: $('article')
  });
  
  $('#right').simpleScrollFollow({
    min_width: 992
  });

  $('#isolated').simpleScrollFollow({
    min_width: 992,
    limit_elem: $('article')
  });
  $('#isolated #toggle_scroll').click(function() {
    if ($(this).text() == 'click to disable scroll') {
      $('#isolated').simpleScrollFollow('setEnabled', false);
      $(this).text('click to enable scroll');
    } else {
      $('#isolated').simpleScrollFollow('setEnabled', true);
      $(this).text('click to disable scroll');
    }
  });
});