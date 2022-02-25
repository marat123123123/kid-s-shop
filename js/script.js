$(document).ready(function(){
$('.header__burger').click(function(event){
    $('.header__burger,.menu__body').toggleClass('active');
    $('body').toggleClass('stop');
});

$('.row-img').click(function(event){
    var source=$(this).attr('src');
    var img = $('.Large_img');
    img.fadeOut('fast', function() {
    $(this).attr({src: source,});
    $(this).fadeIn('fast');
}); 
});
});