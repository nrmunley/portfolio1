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
