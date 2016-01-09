$(document).ready(function(){
  setTimeout(slide1,10000);
});

function slide1(){
  /*$('.bansld').removeClass('bansld').addClass('bansld2');*/
  fadeOutClass ('slide', 'bansld2', 'bansld');
  //fadeInClass ('slide', 'bansld2');
  setTimeout(slide2,5000);
}

function slide2(){
  /*$('.bansld2').removeClass('bansld2').addClass('bansld3');*/
  fadeOutClass ('slide', 'bansld3', 'bansld2');
  //fadeInClass ('slide', 'bansld3');
  setTimeout(slide3,5000);
}

function slide3(){
  /*$('.bansld3').removeClass('bansld3').addClass('bansld');*/
  fadeOutClass ('slide', 'bansld', 'bansld3');
  //fadeInClass ('slide', 'bansld');
  setTimeout(slide1,5000);
}

function fadeInClass (elClass, classAdd) {
  $('.'+elClass).fadeIn('slow', function() {
      $(this).addClass(classAdd);
  });
}
function fadeOutClass (elClass, classAdd, classRem) {
  $('.'+elClass).fadeOut("slow", function() {
      $(this).removeClass(classRem);
      fadeInClass(elClass, classAdd);
      //$(this).addClass(classAdd);
      //$('.'+elClass).fadeIn();
  });
}

//8B2E5F
//BC2747
//http://tympanus.net/codrops/2012/01/02/fullscreen-background-image-slideshow-with-css3/
