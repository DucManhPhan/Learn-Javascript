$(document).ready(function() {
    function blinkText() {
        $(".blink").fadeIn(500);
        $(".blink").fadeOut(500);
    }

    setInterval(blinkText, 1000);
});