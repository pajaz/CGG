var state = "none"

function getContent(page, divid, menu) {
    var cnt = page + ".txt"
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

