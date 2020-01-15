$(window).scroll(function (){
    $('.fadein').each(function (){
        var elemPos = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > elemPos - windowHeight + 200){
            $(this).addClass('scrollin')
        } else  $(this).removeClass('scrollin')
    });
});



$("#slidercanvas3").fadeIn(10000);

$("#slidercanvas3").fadeOut(2000);




$('#footertoppage').click(function(){
    $('body, html').animate({scrollTop:0},4000);
    return false;
});



$('#hamburgerhome').click(function(){
    $('.homemodal, .cover').addClass('appear')
});

$('#closebuttonhome').click(function(){
    $('.homemodal, .cover').removeClass('appear')
});

$('#footerhome').click(function(){
    $('.homemodal, .cover').addClass('appear')
});





$('#hamburgerflowers').click(function(){
    $('.flowersmodal, .cover').addClass('appear')
});

$('#closebuttonflowers').click(function(){
    $('.flowersmodal, .cover').removeClass('appear')
});

$('#footerflowers').click(function(){
    $('.homemodal, .cover').addClass('appear')
});



$('#hamburgerlocation').click(function(){
    $('.locationmodal, .cover').addClass('appear')
});

$('#closebuttonlocation').click(function(){
    $('.locationmodal, .cover').removeClass('appear')
});

$('#footerlocation').click(function(){
    $('.homemodal, .cover').addClass('appear')
});



$('#hamburgerphotos').click(function(){
    $('.photosmodal, .cover').addClass('appear')
});

$('#closebuttonphotos').click(function(){
    $('.photosmodal, .cover').removeClass('appear')
});

$('#footerphotos').click(function(){
    $('.homemodal, .cover').addClass('appear')
});



$('#hamburgeraboutme').click(function(){
    $('.aboutmemodal, .cover').addClass('appear')
});

$('#closebuttonaboutme').click(function(){
    $('.aboutmemodal, .cover').removeClass('appear')
});

$('#footeraboutme').click(function(){
    $('.homemodal, .cover').addClass('appear')
});

