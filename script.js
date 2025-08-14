$(document).ready(function () {
    $('.dropbtn').on('click', function () {
        let dropdown = $(this).parent().next('.dropdown-content'); 
        dropdown.toggleClass('hide');
        $(this).toggleClass('rotate');
    });
});
function checkDropdown(){
    dropdown.forEach(dropdown => {
        if (!dropdown.classList.contains('hide')) {
            dropdown.classList.add('hide');
            dropdown.previousElementSibling.classList.remove('rotate');
        }
    });
}