function gen() {

    // randomize all variables
    var cs = Math.floor(Math.random() * (1000 - 25 + 1)) + 25;
    var colorarray = ["YlGnBu", "GnBu", "Purples", "Blues"];
    var clr = colorarray[Math.floor(Math.random() * colorarray.length)];
    var charset = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM0123456789";
    var seed = charset.charAt(Math.floor(Math.random() * charset.length)) + charset.charAt(Math.floor(Math.random() * charset.length)) + charset.charAt(Math.floor(Math.random() * charset.length)) + charset.charAt(Math.floor(Math.random() * charset.length)) + charset.charAt(Math.floor(Math.random() * charset.length));
    var vrnc = (Math.random() * 1 + 0).toFixed(2);
    var swid = Math.floor(Math.random() * (1000 - 1 + 1)) + 1

    // set trianglify paramaters
    var pattern = Trianglify({
        width: $(window).width(),
        height: $(window).height(),
        variance: vrnc,
        seed: seed,
        stroke_width: swid,
        cell_size: cs,
        x_colors: clr
    });

    // add trianglify svg element and fade out old svg
    $("body").prepend(pattern.svg());
    $("svg:eq(1)").fadeOut(1000, function() {
        $("svg:eq(1)").remove();
    });

    // output params to console
    console.log("");
    console.info("Trianglify-vrnc: " + vrnc);
    console.info("Trianglify-seed: " + seed);
    console.info("Trianglify-colr: " + clr);
    console.info("Trianglify-dims: " + $(window).width() + "x" + $(window).height());
    console.info("Trianglify-cell: " + cs);
    console.info("Trianglify-swid: " + swid);
}

gen();

setInterval(gen, 10000);
