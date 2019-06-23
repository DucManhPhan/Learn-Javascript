$(document).ready(function() {
    // first way
    // $(document).on("contextmenu", function(e) {
    //     e.preventDefault();

    //     alert("You can not have right click in this page.");

    //     return false;
    // });

    // second way
    $('p').mousedown(function(event) {
        switch (event.which) {
            case 1:
                alert('Left Mouse button pressed.');
                break;
            case 2:
                alert('Middle Mouse button pressed.');
                break;
            case 3:
                alert('Right Mouse button pressed.');
                break;
            default:
                alert('You have a strange Mouse!');
        }
    });
});