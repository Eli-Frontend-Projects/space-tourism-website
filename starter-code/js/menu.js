const links = Array.from(document.getElementsByClassName("menu"));

Array.from(links).forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    links.forEach((link) => {
      link.classList.remove("active-menu");
    });
    link.classList.add("active-menu");
})});