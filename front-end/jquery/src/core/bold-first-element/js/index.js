$(document).ready(function() {
    $("p").each(function(index) {
        // first way
        // console.log(index + ": " + $(this).text())
        let value = $(this).text();
        let first_word = "";

        for (character of value) {
            if (character == ' ') {
                break;
            }

            first_word += character;
        }

        let new_first_word = first_word.bold();
        $(this).html(value.replace(first_word, new_first_word));

        // second way
        // let elem = $(this);
        // elem.html(elem.text().replace(/(^\w+)/, '<b>$1</b>'));
    });
});