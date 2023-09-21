document.addEventListener("DOMContentLoaded", function() {
    var scrollA = document.getElementById("scrollAbout");
    var scrollP = document.getElementById("scrollProjects");
    var scrollC = document.getElementById("scrollContact");

    scrollA.addEventListener("click", function() {
        var scrollToY = window.scrollY + window.innerHeight;
        window.scrollTo(0, scrollToY);
    });
    scrollP.addEventListener("click", function() {
        var scrollToY = (window.scrollY + window.innerHeight)*2;
        window.scrollTo(0, scrollToY);
    });
    scrollC.addEventListener("click", function() {
        var scrollToY = (window.scrollY + window.innerHeight)*3;
        window.scrollTo(0, scrollToY);
    });
});
