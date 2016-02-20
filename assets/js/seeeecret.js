// set konami keys
var keys = [], konami = "38,38,40,40,37,39,37,39,66,65,13";

// capture keydown event
$(document).keydown(function(e) {
    keys.push(e.keyCode);
    // check if konami code
    if (keys.toString().indexOf(konami) >= 0) {
      // unbind konami so things dont break
        $(document).unbind("keydown", arguments.callee);
        // play roll animation
        $("#container").addClass("roll");
        // remove class after roll is done
        setTimeout(function() {
            $("#container").removeClass("roll");
        }, 1000)
    }
});
