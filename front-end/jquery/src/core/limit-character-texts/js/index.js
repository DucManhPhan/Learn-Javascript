let max_characters = 15;

$(document).ready(function() {
    // set maximum characters for span element
    let max_characters_elem = $(".max-characters");
    max_characters_elem.text(max_characters.toString());
    $("#content-text").attr('maxlength', max_characters.toString());

    // Create dynamic p element after textarea
    $("#content-text").after("<p><span class='inform-text'>"
                             + max_characters.toString()
                             + "</span> Character(s) Remaining</p>");

    // measure the number of characters that are typed in textarea
    $("#content-text").keyup(function() {
        let remain_characters = max_characters - $(this).val().length;
        $(".inform-text").text(remain_characters.toString());
    });
});