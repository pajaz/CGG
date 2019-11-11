
function getContent() {
    console.log("Working")
    $(document).ready(function() {
        console.log("Working2")
        $('#content').load("frontPage.html");

    });
}