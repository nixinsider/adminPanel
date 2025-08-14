$(document).ready(function () {
    $('.dropbtn').on('click', function (event) {
        event.stopPropagation();
        $('.dropdown-content').not($(this).parent().next()).addClass('hide');
        $('.dropbtn').not(this).removeClass('rotate');
        let dropdown = $(this).parent().next('.dropdown-content');
        dropdown.toggleClass('hide');
        $(this).toggleClass('rotate');
    });
    $(document).on('click', function () {
        $('.dropdown-content').addClass('hide');
        $('.dropbtn').removeClass('rotate');
    });
});
