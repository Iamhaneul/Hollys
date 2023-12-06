let myObj = {
  key01:fnWrap,
  key02:fnSlider,
  key03:fnCookie,
  key04:sliderAuto,
}

function selectPage(){
  let osString = navigator.userAgent;
  if(osString.indexOf('Window')>=0){
    // 윈도우환경
    location.href='https://Iamhanuel.github.io/hollys/';
  }else{
    // 모바일환경
    location.href='https://Iamhanuel.github.io/hollys/m.index.html';
  }
}

function sliderAuto(){
  let tlVal = 0;
  setInterval(function(){      
    tlVal -= 25;
    if(tlVal<=-100){
      tlVal=0;
    }
    if(tlVal==0){
      resetActive($('.pagenation span'));
      setActive($('.pagenation span').eq(0));
    }else if(tlVal==(-25)){
      resetActive($('.pagenation span'));
      setActive($('.pagenation span').eq(1));
    }else if(tlVal==(-50)){
      resetActive($('.pagenation span'));
      setActive($('.pagenation span').eq(2));
    }else if(tlVal==(-75)){
      resetActive($('.pagenation span'));
      setActive($('.pagenation span').eq(3));
    }
    $('.slider').css({
      transform:`translateX(${tlVal}%)`,
    })
  },2000);
}
// 페이지네이션 만들기
function fnWrap(){
  $('.slider').wrap('<div class="slider-wrap"></div>');
  $('.slider-wrap').append('<div class="pagenation"></div>');
  for(let idx=0; idx<=$('.slider').children('.img-box').length-1;idx++){
    $('.pagenation').append(`<span>${idx}</span>`);
  }
  setActive($('.pagenation span:first-child'));
}
function setActive(el){
  el.addClass('active');
}
function resetActive(el){
  el.removeClass('active');
}
// 콜백함수1
function callBack01(){
  let navDisplay = $('#nav').css('display');
  if(navDisplay == 'none'){
    fnClose($('.sub-nav'));
    font400($('.main-nav').children('li').children('a'));
  };
}
// 링크함수
function fnLink(add){
  location.href=`${add}`;
}
// 폰드400
function font400(el){
  el.css({
    fontWeight:'400',
  })
}
// 닫기함수
function fnClose(el){      
  el.stop().hide();
}
// 쿠키함수
function fnCookie(){
  let popupValue = $.cookie('popup');
  if(popupValue=='no'){
    fnClose($('#popup'));
  }else{
    $('#popup').stop().show()
  };
}
function fnSlider(){
  let imgNum = $('.slider').children('.img-box').length;      
  let winWidth = $(window).width();
  $('.slider').addClass('clearfix').css({
    width:`${winWidth * imgNum}px`,
  });    
  $('.slider').children('.img-box').css({      
    width:`${winWidth}px`,
  })
}