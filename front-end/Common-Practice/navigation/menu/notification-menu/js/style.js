let isClick = false;

$(document).ready(function() {
    $(".notification").click(function() {
        if (!isClick) {
            $(".dropdown-menu").show();
        } else {
            $(".dropdown-menu").hide();
        }

        isClick = !isClick;
    });

    $(".dropdown-menu").hide();
});
