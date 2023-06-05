// ACCORDEON

$(document).ready(function() {
  $('.accordeon__item').click(function(event) {
    if($('.accordeon').hasClass('one')){
      $('.accordeon__item').not($(this)).removeClass('active');
      $('.accordeon__content').not($(this).next()).slideUp(200);
    }
    $(this).toggleClass('active').next().slideToggle(200);
  });
});