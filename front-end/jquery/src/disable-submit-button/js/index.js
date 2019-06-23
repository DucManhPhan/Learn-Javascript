$(document).ready(function() {
    // enable submit button when checkbox checked
    // first way
    // $("#ckbox").click(function() {
    //     if ($("#btn").is(":disabled")) {
    //         $("#btn").removeAttr('disabled');
    //     } else {
    //         $("#btn").attr('disabled', 'disabled');
    //     }
    // });

    // second way
    $("#ckbox").click(function() {
        if ($("#btn").is(":disabled")) {
            $("#btn").prop('disabled', false);
        } else {
            $("#btn").prop('disabled', true);
        }
    });

    $("#btn").click(function(e) {
        e.preventDefault();

        alert("Hey, what is your name?");
        // return false;
    })
});