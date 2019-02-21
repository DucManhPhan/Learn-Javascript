$(document).ready(function() {
    $("a[href='#top']").click(function() {
        // first way
        // $("html, body").animate({scrollTop: 0}, "slow");

        // second way
        // $(window).scrollTo({top: 0, behavior: 'smooth'});

        //return false;

        // third way - use normal js.
        // let scrollToTop = window.setInterval(function() {
        //     let pos = window.pageYOffset;
        //     if (pos > 0) {
        //         window.scrollTo(0, pos - 20);   // how far to scroll on each step
        //     } else {
        //         window.clearInterval(scrollToTop);
        //     }
        // }, 16);         // how fast to scroll (this equals roughly 60 fps)

        // fourth way
        document.location.href = "#top";
    });

    $("a[href='#bottom']").click(function() {
        // first way
        $("html, body").animate({scrollTop: $(document).height()}, 1000);        
    });
    
    
});

