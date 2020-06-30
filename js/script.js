// Assert responsiveness
if(screen.width >= 768) {
    // Assert present warning
    $('.present-warning').removeClass('container');
    $('.present-warning').addClass('container-fluid');

    //Assert banner
    $('.banner').removeClass('container');
    $('.banner').addClass('container-fluid');

    $('.btn-banner').removeClass('text-center');

    //Assert reasons 
    $('.motivos').removeClass('mt-3');
    $('.motivos').addClass('mt-5');

    //Assert trataments
    $('#text-tratamento').removeClass('text-left');
    $('#text-tratamento').addClass('text-center');

    $('#subscribe-center').addClass('align-center');

    //Assert council
    $('.conselhos-federais').removeClass('.p-0');
}

//Menu effects
$('.icone-fechar-menu').hide();
$('#items').hide();

$('.icone-menu').click(() => { 
    $('.icone-menu').hide();
    $('.icone-fechar-menu').show();

    $('#items').show();
});

$('.icone-fechar-menu').click(() => { 
    $('.icone-fechar-menu').hide();
    $('.icone-menu').show();

    $('#items').hide();
});