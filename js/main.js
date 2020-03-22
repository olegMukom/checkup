$(document).ready(function() {

  $('.btn__hamburger').click(function() {

  });

  $('.step-label__wrap').find('.step-input').focus(function() {
    $(this).parents('.step-label__wrap').addClass('step-label__wrap_focus');
  });
  $('.step-label__wrap').find('.step-input').focusout(function() {
    $(this).parents('.step-label__wrap').removeClass('step-label__wrap_focus');
  });

  $('.step__btn-next_1').click(function() {
    var input1 = $('.step-input__age');
    var input2 = $('.step-input__height');
    var input3 = $('.step-input__weight');
    var radios = $('.step-input__sex');
    var radioVal = [];
    for(var i = 0; i < radios.length; i++){
      radioVal.push(radios.eq(i).prop("checked"));
    }
    // if(input1.val() != '' && input2.val() != '' && input3.val() != '' && $.inArray(true, radioVal) != -1){
      $('.step_1').animate({'max-height' : 0}, 300);
      $('.step_2').delay(300).animate({'max-height' : '1300px'}, 600);
      $('.pagination-step').removeClass('pagination-step_active');
      $('.pagination-step').eq(1).addClass('pagination-step_active');
    // }
  });

  var proressInterval = [];
  var i = 0;


  $('.step__btn-back_2').click(function() {
    $('.step_1').animate({'max-height' : '570px'}, 300);
    $('.step_2').delay(300).animate({'max-height' : 0}, 300);
    $('.pagination-step').removeClass('pagination-step_active');
    $('.pagination-step').eq(0).addClass('pagination-step_active');
  });
  $('.step__btn-next_2').click(function() {
    $('.step_2').animate({'max-height' : 0}, 600);
    $('.step_3').delay(300).animate({'max-height' : '400px'}, 300);
    $('.pagination-step').removeClass('pagination-step_active');
    $('.pagination-step').eq(2).addClass('pagination-step_active');
  });
  $('.step__btn-next_3').click(function() {
    $('.step_3').animate({'max-height' : 0}, 300);
    // $('.step_4').delay(300).animate({'max-height' : '100%'}, 300);
    $('.step_4').addClass('step_4_active');
    $('.pagination-step').removeClass('pagination-step_active');
    $('.pagination-step').eq(3).addClass('pagination-step_active');
  });
  $('.step__btn-next_4').click(function() {
    clearInterval(proressInterval);
    // clearInterval(clearIntervalTime);
    proressInterval = setInterval(proressAnim, 100);
    clearIntervalTime = setInterval(timerVal, 1000);
    // $('.step_4').animate({'max-height' : 0}, 300);
    // $('.step_5').delay(300).animate({'max-height' : '100%'}, 300);
    $('.step_5').addClass('step_5_active');
    setTimeout(function() {
      $('.step_4').removeClass('step_4_active');
    }, 300);
    $('.pagination-step').removeClass('pagination-step_active');
    $('.pagination-step').eq(0).addClass('pagination-step_active');
  });
  // $('.step__btn-next_5').click(function() {
  //   $('.step_5').removeClass('step_5_active');
  //   $('.step_1').animate({'max-height' : '530px'}, 300);
  //   $('.pagination-step').removeClass('pagination-step_active');
  //   $('.pagination-step').eq(0).addClass('pagination-step_active');
  // });
  
  var circle = $('.progress-ring__circle');
  var radius = circle.attr('r');
  var circumference = 2 * Math.PI * radius;
  
  circle.css({'stroke-dasharray' : circumference + ' ' + circumference});
  circle.css({'stroke-dashoffset' : circumference});
  
  function setProgress(percent) {
    var offset = circumference - percent / 100 * circumference;
    // offset = 383 - offset;
    circle.css({'stroke-dashoffset' : offset});
  }
  var point = $('.progress-point')
  var radius = 61;
  var f = 0;
  var s = 2 * Math.PI / 103; 
  var t = 9;
  function proressAnim() {
    if(i > 100){
      $('.step_1').animate({'max-height' : '570px'}, 300);
      $('.step_5').removeClass('step_5_active');
      $('.pagination-step').removeClass('pagination-step_active');
      $('.pagination-step').eq(0).addClass('pagination-step_active');
      clearInterval(proressInterval);
      clearInterval(clearIntervalTime);
      clearTimeout = setTimeout(timetOuutStep6, 4000);
      i = 0;
      t = 9;
      point.css({'left' : '71px'}); 
      point.css({'bottom' : '132px'});
    } else {
      setProgress(i);
      i += 1;
      f += s; 
      var left = Math.floor(Number(radius * Math.sin(f) + 72));
      var bottom = Math.floor(Number(radius * Math.cos(f) + 72));
      point.css({'left' : left}); 
      point.css({'bottom' : bottom});
    }
  }
  
  function timerVal() {
    $('.step-circle__val').text(t);
    t -= 1;
  }
  
  // proressInterval = setInterval(proressAnim, 100);
  // clearIntervalTime = setInterval(timerVal, 1000);

  
  // proressInterval = setInterval(proressAnim, 1000);

  // clearInterval(proressInterval);
});