$(document).ready(function() {
    $('form').on('submit', function(e) {
        e.preventDefault();
        const novaTarefa = $('#nome-tarefa').val();
        const novoItem = $('<li></li>');
        novoItem.text(novaTarefa);
        $('ul').append(novoItem);
        $('#nome-tarefa').val('');
    });
    
    $('ul').on('click', 'li', function() {
        $(this).css("text-decoration", "solid 3px line-through");
    });
})