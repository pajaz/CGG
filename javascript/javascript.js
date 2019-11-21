var state = "none"

function getContent(page, divid, menu) {
    var cnt = page + ".html"
        id = "#content" + divid
    
    if (divid=="2") {
        console.log(menu + " Onko olemassa")
        setButtonFocus(page)
    }

    console.log(id)
    $(document).ready(function() {
        $(id).load(cnt);
    });
    
    if (menu !== undefined) {
            state = menu
        } 
}

function checkState() {
    if (state == "none") {
        return
    } 
    console.log(state)
    getContent(state, "2")

    state = "none"

}

function setButtonFocus(bb) {
    var b = bb

    console.log(b + " TEST")
    switch (b) {
        case "alacartePage":
            document.getElementById("alacarte").focus()
            break;
        case "lunchPage":
            document.getElementById("lunch").focus()
            break;
        case "drinkPage":
            document.getElementById("drink").focus()
            break;

    }
}

function setBackground() {
    $(function() {
        var body = $(".bg-mid");

        if($(window).width() <= 427) {
            var backgrounds = [
                'url(../resources/bg-mobile1.jpg)'];
        } else if($(window).width() <= 979) {
            var backgrounds = [
                'url(../resources/bg-medium1.jpg)'];
        } else {
            var backgrounds = [
                'url(../resources/background1.jpg)', 
                'url(../resources/background2.jpg)',
                'url(../resources/background3.jpg)'];
        }
          console.log(backgrounds)
        var current = 0;
        function nextBackground() {
            body.css(
                'background',
            backgrounds[current = ++current % backgrounds.length]);
    
            setTimeout(nextBackground, 10000);
        }
        setTimeout(nextBackground, 10000);
        body.css('background', backgrounds[0]);
    });

}