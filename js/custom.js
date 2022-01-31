$(document).ready(function(){
    $('.banner-slider').slick({
      dots:true,
      arrows:false,
      autoplay:true,
    });

    new VenoBox({
        selector: ".my-link"
    });
    new VenoBox({
      selector: '.my-image-links',
      spinner: 'swing',
      numeration: true,
      infinigall: true,
      share: true,
  });

  $('.testimonial-slider').slick({
    dots:true,
    arrows:false,
    autoplay:true,
    slidesToShow: 2,
    slidesToScroll: 1,
  });

  $('.counter').counterUp({
    delay: 1,
});

  new WOW().init();

  });

  // scroll-button
  $(window).scroll(function(){
    var scrolling =$(this).scrollTop();

    if(scrolling>300){
    $('.scroll').fadeIn();}


    else{
      $('.scroll').fadeOut();}

  });

  $('.scroll').click(function(){
    $('html,body').animate({
      scrollTop:'0px',
    },1500);
  });
