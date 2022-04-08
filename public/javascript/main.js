document.addEventListener("DOMContentLoaded", function () {
  let about = document.getElementById("about");
  let work = document.getElementById("work");
  let contact = document.getElementById("contact");

  setTimeout(function () {
    let html = document.getElementsByTagName("html");
    html[0].style.scrollBehavior = "smooth";
  }, 500);
});
