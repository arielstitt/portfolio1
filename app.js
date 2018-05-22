$(() => {
    console.log("Everything is ready, let's do this");

    $("#myNavbar a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                window.location.hash = hash;
            });
        }
    });
    // ======================PORTFOLIO ===============================
    $('.portfolio-item-1').hover(
        function () {
            $(this).addClass('grow')
            $('.portfolio-item-2, .portfolio-item-3, .portfolio-item-4').addClass('shrink')
        }
    )
    $('.portfolio-item-2').hover(
        function () {
            $(this).addClass('grow')
            $('.portfolio-item-1, .portfolio-item-3, .portfolio-item-4').addClass('shrink')
        }
    )
    $('.portfolio-item-3').hover(
        function () {
            $(this).addClass('grow')
            $('.portfolio-item-1, .portfolio-item-2, .portfolio-item-4').addClass('shrink')
        }
    )
    $('.portfolio-item-4').hover(
        function () {
            $(this).addClass('grow')
            $('.portfolio-item-1, .portfolio-item-2, .portfolio-item-3').addClass('shrink')
        }
    )
    // =====================ABOUT======================

    $('.about-item-1').hover(
        function () {
            $(this).addClass('grow')
            $('.about-item-2, .about-item-3, .about-item-4').addClass('shrink')
        }
    )
    $('.about-item-2').hover(
        function () {
            $(this).addClass('grow')
            $('.about-item-1, .about-item-3, .about-item-4').addClass('shrink')
        }
    )
    $('.about-item-3').hover(
        function () {
            $(this).addClass('grow')
            $('.about-item-1, .about-item-2, .about-item-4').addClass('shrink')
        }
    )
    $('.about-item-4').hover(
        function () {
            $(this).addClass('grow')
            $('.about-item-1, .about-item-2, .about-item-3').addClass('shrink')
        }
    )
    // ================ CONTACT =================

    $('.contact-item-1').hover(
        function () {
            $(this).addClass('grow')
            $('.contact-item-2, .contact-item-3').addClass('shrink')
        }
    )

    $('.contact-item-2').hover(
        function () {
            $(this).addClass('grow')
            $('.contact-item-1, .contact-item-3').addClass('shrink')
        }
    )
    $('.contact-item-3').hover(
        function () {
            $(this).addClass('grow')
            $('.contact-item-2, .contact-item-1').addClass('shrink')
        }
    )
});