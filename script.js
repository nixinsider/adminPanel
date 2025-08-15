$(document).ready(function () {
    // Dropdown functionality
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

    // Sidebar toggle functionality
    $('.burger-icon').on('click', function (e) {
        e.stopPropagation();
        $('.sidebar').toggleClass('active');
        $('.sidebar-overlay').toggleClass('active');
        $('body').toggleClass('sidebar-open');
    });

    // Close sidebar when clicking overlay
    $('.sidebar-overlay').on('click', function () {
        $('.sidebar').removeClass('active');
        $('.sidebar-overlay').removeClass('active');
        $('body').removeClass('sidebar-open');
    });

    // Close sidebar when clicking close icon
    $('.close-icon').on('click', function (e) {
        e.stopPropagation();
        $('.sidebar').removeClass('active');
        $('.sidebar-overlay').removeClass('active');
        $('body').removeClass('sidebar-open');
    });

    // Close sidebar when clicking outside
    $(document).on('click', function (e) {
        if (!$(e.target).closest('.sidebar, .burger-icon').length) {
            $('.sidebar').removeClass('active');
            $('.sidebar-overlay').removeClass('active');
            $('body').removeClass('sidebar-open');
        }
    });

    // Handle window resize
    $(window).on('resize', function () {
        if ($(window).width() > 1400) {
            $('.sidebar').removeClass('active');
            $('.sidebar-overlay').removeClass('active');
            $('body').removeClass('sidebar-open');
        }
    });
});
