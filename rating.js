$(document).ready(function() {

    $('.button-rating').on('click', function() {
        $(this).parent().find('.button-rating-selected').removeClass('button-rating-selected');
        $(this).addClass('button-rating-selected');
    });
});