document.addEventListener('DOMContentLoaded', function () {
    let about = document.getElementById("about");
    let work = document.getElementById("work");
    let contact = document.getElementById("contact");

    document.getElementById("theme").addEventListener("click", function() {
        //document.body.classList.toggle("dark-theme");
        about.classList.toggle("dark");
        work.classList.toggle("dark");
        contact.classList.toggle("dark");

    });
});
/*
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("about-circle").addEventListener("click", function(event) {
        if (this.hash !== "") {
            event.preventDefault();

            let hash = this.hash;
  
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            });
        }
    });
});
    */
