$(window).scroll(function() {

 if ($(this).scrollTop()>140)
  {
     $('.nl').fadeIn();
  }
 else
  {
   $('.nl').fadeOut();
   $('.nl')
  }
});

$(window).scroll(function() {

 if ($(this).scrollTop()>140)
  {
     $('.top').fadeIn();
  }
 else
  {
   $('.top').fadeOut();
   $('.top')
  }
});
