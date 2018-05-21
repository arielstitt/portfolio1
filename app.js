$(() => {
    console.log("Everything is ready, let's do this");

    // ===============PORTFOLIO==============
    $(".portfolio-item").click(function(){
        $(".portfolio-item").animate({'height': '100vh', 'width': '100vw'});
    });
    
});