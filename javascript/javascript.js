var state = "none"

function getContent(page, divid, menu) {
    var cnt = "/views/" + page + ".html"
        id = "#content" + divid
    
    if (divid=="2") {
        document.getElementById(page.substring(0, page.length-4)).focus()
    }

    console.log(id)
    console.log("state " + state)
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
            body.css({
                    'background':
                    backgrounds[current = ++current % backgrounds.length],
                    'background-size':
                    'cover'
                 });
    
            setTimeout(nextBackground, 10000);
        }
        setTimeout(nextBackground, 10000);
        body.css({'background': backgrounds[0],
                  'background-size':
                  'cover'
                });
    });

}

function getLunchHeading(id) {
    var date =  new Date()
        week = getWeekNr(date)
        day = getMonday(date)
    
    for (var i = 0; i<5; i++) {

        document.getElementById("lunch" + (i+1)).textContent = getWeekDay(day) + " " + day.getDate() + "." + day.getMonth() + "." + day.getFullYear( )
        day.setDate(day.getDate() + 1)

    }
    
}

// Hakee kuluvan viikon maanantain
function getMonday(d) {
    d = new Date(d);
    var day = d.getDay(),
    diff = d.getDate() - day + (day == 0 ? -6:1); // adjust when day is sunday
    
    return new Date(d.setDate(diff));
}

function getWeekNr(d) {
    var date =  new Date(d)
    
    date.setHours(0, 0, 0, 0)
    // Thursday in current week decides the year.
    date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7)
    // January 4 is always in week 1.
    var week1 = new Date(date.getFullYear(), 0, 4)
    // Adjust to Thursday in week 1 and count number of weeks from date to week1.
    var weekNow = 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000 - 3 + (week1.getDay() + 6) % 7) / 7)
    return weekNow
}

function getWeekDay(d) {
    var weekday = new Array(7)
    weekday[0] = "Sunnuntai"
    weekday[1] = "Maanantai"
    weekday[2] = "Tiistai"
    weekday[3] = "Keskiviikko"
    weekday[4] = "Torstai"
    weekday[5] = "Perjantai"
    weekday[6] = "Lauantai"
    date =  new Date(d)

    return weekday[date.getDay()]
}

function daysInMonth (month, year) { 
    console.log(new Date(year, month, 0).getDate())
    return new Date(year, month, 0).getDate()
}


function createFormInputList(id, formName) {
    var dateNow = new Date()
        optionsMonths = Array.from(Array(12), (_,x) => x+1)
        optionsDays = Array.from(Array(daysInMonth((dateNow.getMonth() + 1), dateNow.getFullYear())), (_,x) => x + 1)
        optionsYears = [dateNow.getFullYear(), dateNow.getFullYear() + 1]
        optionsHours = Array.from(Array(24), (_,x) => x)
        optionsMinutes = ["00", "15", "30", "45"]
        options = [optionsMinutes,optionsHours, optionsYears, optionsMonths, optionsDays]
        ids = ["minutes", "hours", "years", "months", "days"]
        next = "viesti"

    for (var i = 0; i<ids.length; i++) {
        var list = document.createElement('select')

        list.id = ids[i]
        list.name = ids[i]

        options[i].map(a => {
            var o = document.createElement("option")
            o.value = a
            o.text = a
            list.appendChild(o)   
        });

        var form = document.getElementById(formName)
        var submit = document.getElementById(next)
        console.log("Testi " + submit.id)
        form.insertBefore(list, submit)
        next = list.id
 
    }
    document.getElementById("months").value = (dateNow.getMonth() + 1)
    document.getElementById("days").value = dateNow.getDate()
}

function changeDropdownDays(month, year) {
    var days = Array.from(Array(daysInMonth(month, year)), (_,x) => x + 1)
    $("#days").empty();
    var list = document.getElementById("days")
    days.map(a => {
        var o = document.createElement("option")
        o.value = a
        o.text = a
        list.appendChild(o)   
    });
}

function changeDropdownValue(menu, month, year) {
    console.log(menu + " " + month + " " + year)
    var day = daysInMonth((month), year)
    document.getElementById(menu).value = day
}

$(function(){
    $(".menuitem").click(function(){
        $("#menu").slideToggle("fast");
    });
});

$(function(){
    $("#toggle-menu").click(function(){
        $("#menu").slideToggle("fast");
    });
});

$(function(){
    $("#approve").click(function(){
        $("#welcomebox").hide();
    });
});
