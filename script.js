$(document).ready(function() {
    $('#dropdownBtn').on('click', function() {
        setTimeout(function() {
        $('#myDropdown').toggleClass('hide');
        }, 100);
        $(this).toggleClass('rotate');
    });
});