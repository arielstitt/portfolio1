$(() => {
    console.log("Everything is ready, let's do this");

    // Add smooth scrolling on all links inside the navbar
    $("#myNavbar a").on('click', function (event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        }  // End if
    });


    
    const $portfolioItem1 = $('.portfolio-item-1').click(function(){
        console.log("you clicked a thing")
        //hide the other elements 
        $('.portfolio-item-2, .portfolio-item-3, .portfolio-item-4').hide()
        $('.portfolio-item-1').animate({
            width: "80vw",
            height: '80vh',
          }, 1000, function() {
            
          });
    })

    const $portfolioItem2 = $('.portfolio-item-2').click(function(){
        console.log("you clicked a thing")
        //hide the other elements 
        $('.portfolio-item-1, .portfolio-item-3, .portfolio-item-4').hide()
        $('.portfolio-item-2').animate({
            width: "80vw",
            height: '80vh',
            
          }, 1000, function() {
            
          });
    })

    const $portfolioItem3 = $('.portfolio-item-3').click(function(){
        console.log("you clicked a thing")
        //hide the other elements 
        $('.portfolio-item-1, .portfolio-item-2, .portfolio-item-4').hide()
        $('.portfolio-item-3').animate({
            width: "80vw",
            height: '80vh',
            
          }, 1000, function() {
            
          });
    })
    
    const $portfolioItem4 = $('.portfolio-item-4').click(function(){
        console.log("you clicked a thing")
        //hide the other elements 
        $('.portfolio-item-1, .portfolio-item-2, .portfolio-item-3').hide()
        $('.portfolio-item-4').animate({
            width: "80vw",
            height: '80vh',
            
          }, 1000, function() {
            
          });
    })

});