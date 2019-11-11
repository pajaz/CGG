
function getContent(page) {
    var cnt = page + ".html"

    console.log("Working")
    $(document).ready(function() {
        console.log("Working2")
        $('#content').load(page);

    });
}