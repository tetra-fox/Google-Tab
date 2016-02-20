// enter key for query

$(document).ready(function() {
    $("#query").keydown(function(event) {
        if (event.keyCode === 13) {
            search();
        }
    });
});

// actually search
function search() {
    if ($("#query").val()) {
        window.location.href = "http://www.google.com/#q=" + $("#query").val();
    } else {
      // if query is blank show error
        $("#search").addClass("animated shake");
        $("#label").addClass("error");
        $("#label").text("query is not valid");
        setTimeout(function() {
            $("#label").text("search");
            $("#search").removeClass("animated shake");
            $("#label").removeClass("error");
        }, 1000)
    }
}
