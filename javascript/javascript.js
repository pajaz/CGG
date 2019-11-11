
function getContent(page) {
    var cnt = page + ".html"

    console.log(cnt)
    $(document).ready(function() {
        console.log("Working2")
        $('#content').load(cnt);

    });
}