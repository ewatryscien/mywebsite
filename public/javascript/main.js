document.addEventListener('DOMContentLoaded', function () {
    let about = document.getElementById("about");
    let work = document.getElementById("work");
    let contact = document.getElementById("contact");
/*
    document.getElementById("theme").addEventListener("click", function() {
        //document.body.classList.toggle("dark-theme");
        about.classList.toggle("dark");
        work.classList.toggle("dark");
        contact.classList.toggle("dark");

    });
*/
    setTimeout(function() {
        let html = document.getElementsByTagName("html");
        html[0].style.scrollBehavior = "smooth";
    }, 500);
});

