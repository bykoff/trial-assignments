$(document).ready(function() {

  $('.perview-itm__itm>a').on('click', function(e) {
    e.preventDefault();
      var that = $(this),
        item = that.closest('.perview-itm__itm'),
        container = that.closest('.split-block__left'),
        display = container.find('.itm-block'),
        path = item.find('img').attr('src'),
        duration = 300;

        if (!item.hasClass('active')) {
          item.addClass('active').siblings().removeClass('active');

          display.find('img').fadeOut(duration, function(){
            $(this).attr('src', path).fadeIn(duration);
          });
        }
  });

  $('.accordion__trigger').on('click', function(e) {
    e.preventDefault();
      var that = $(this),
        item = that.closest('.accordion__item'),
        content = item.find('.accordion__inner'),
        duration = 300;

        if (!item.hasClass('active')) {
          item.removeClass('active');
          item.addClass('active');

          content.slideDown(duration);
        } else{
          content.slideUp(duration);
          item.removeClass('active');
        }

  });

  if ($(window).width() <= 320) {
        $('.itm-info-box__bread-crumps li:nth-child(3)>a').text('...');
        $('.desc-box__itm--mobile').text('');
        $('.desc-box__itm').clone().appendTo('.desc-box__itm--mobile');
      }

  $(window).on('resize load ready', function () {
    if ($(window).width() <= 320) {
        $('.itm-info-box__bread-crumps li:nth-child(3)>a').text('...');
        $('.desc-box__itm--mobile').text('');
        $('.desc-box__itm').clone().appendTo('.desc-box__itm--mobile');
      }
  });
});

(function($) {
  $(function() {
      $('.jcarousel')
          .jcarousel({
              vertical: true,
              wrap: 'circular'
          });
      $('.jcarousel-control-next')
          .on('jcarouselcontrol:active', function() {
              $(this).removeClass('inactive');
          })
          .on('jcarouselcontrol:inactive', function() {
              $(this).addClass('inactive');
          })
          .jcarouselControl({
              target: '+=1'
          });
    });
})(jQuery);