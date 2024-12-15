$('.btn').on('click', function(){
    
    $(this).toggleClass('is-active');
    $('#menu').toggleClass('is-active');
    
});

$('#menu a').on('click', function(){
    
    $(this).removeClass('is-active');
    $('#menu').removeClass('is-active');
    
});