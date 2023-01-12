$(document).ready(function(){
    $('header button').click(function(){
        $('form').slideDown();
    })

    $('#botaoCancelar').click(function(){
        $('form').slideUp();
    })

    $('form').on('submit', function(e) {
        e.preventDefault();
        const valorDaTarefa = $('#tarefa').val();
        const novaTarefa = $('<li></li>');

        $(`<li> ${valorDaTarefa} </li>`).appendTo(novaTarefa);
        $(novaTarefa).appendTo('ol');
        })}
)

$('ol').on('click', 'li', function () {
    $(this).parent('li').toggleClass('checked');
})

