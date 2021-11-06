  $('.product-slider').slick({
    arrows: false,
    dots: true,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 3000,
    //pauseOnHover: true,
    slidesToShow: 4,
    slidesToScroll: 1
  });
  $(function() {
  $(window).scroll(function() {
  if($(this).scrollTop() != 0) {
  $('#topNubex').fadeIn();
  } else {
  $('#topNubex').fadeOut();
  }
  });
  $('#topNubex').click(function() {
  $('body,html').animate({scrollTop:0},700);
  });
  });