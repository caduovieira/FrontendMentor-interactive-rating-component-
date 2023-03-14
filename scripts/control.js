let rating = 0;
const ratingMessage = ["We're sorry...", "Well... ok.", "Thanks!", "Thank you!", "WOW, THANK YOU!"];

//Função que monitora o click sobre os ratings
$('#rating div').on('click', function() {
    //Verifica se o botão clicado NÃO possui a classe active
    if(!$(this).hasClass('active')){
        //Remove a classe active de todos os botões
        $('#rating div').removeClass('active');
        //Adiciona a classe active no botão clicado
        $(this).addClass('active');

        //Armazena o valor clicado na variável
        rating = $(this).children('span:first-child').text();
    }
})

//Função que monitora o click sobre o botão submit
$('#submit').on('click', function() {
    //Dispara o alerta se nenhuma nota foi escolhida
    if(rating == 0) {
        alert("Please, select your rating!");
    }else {
        //Escreve a nota armazenada na variável dentro da span
        $('#thank-you h1').text(ratingMessage[rating - 1]);
        $('#selection span').text(rating);
        
        //Adiciona as classses de animação
        $('#rating-container').addClass('animate');
        $('#thank-you').addClass('animate');
        
        //Aguardar o tempo certo para os elementos surgirem na tela
        setTimeout(function()  {
            $('#rating-container').hide();
            $('#thank-you').css('display', 'flex');
        }, 150);
    }
})