$('#nav-menu').hide();

$(window).scroll(function () { 
    if($(this).scrollTop() > 20) {
        $('#nav-menu').fadeIn();
    } else {
        $('#nav-menu').fadeOut();
    }
});