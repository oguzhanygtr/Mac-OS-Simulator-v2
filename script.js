$(".app").draggable({
  handle: ".top",
  scroll: false
});

$("button").draggable({
  scroll: false,
  cancel: false
});


$('.circle:nth-child(1)').click(function(){
    $('.app').fadeOut();
    $('button').fadeIn();
});

$('.circle:nth-child(2)').click(function(){
    $('.app').fadeOut();
    $('button').fadeIn();
});

$('.circle:nth-child(3)').click(function(){
  $('.app').toggleClass('larger', 1000);
});

$('button').dblclick(function(){
   $('.app').fadeIn();
});

$('.content').each(function(){
    this.contentEditable = true;
});