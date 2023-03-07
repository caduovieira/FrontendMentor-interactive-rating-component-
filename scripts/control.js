let rating = 0;

$('#rating div').on('click', function() {
    if(!$(this).hasClass('active')){
        $('#rating div').removeClass('active');
        $(this).addClass('active');

        rating = $(this).children('span:first-child').text();
    }
})

$('#submit').on('click', function() {
    if(rating == 0) {
        alert("Selecione uma nota");
    }
})