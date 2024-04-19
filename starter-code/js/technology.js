const links = Array.from(document.getElementsByClassName("technology-selector"));

// Get elements by ID within each link
const techName = document.getElementById("technology-name");
const techDescription = document.getElementById("technology-description");
const techImage= document.getElementById("technology-image");

let elements = [];

fetch("https://achrafedd.github.io/Space-Tourism/data.json")
  .then((res) => res.json())
  .then((data) => {
    for (let i = 0; i < data.technology.length; i++) {
      elements.push(data.technology[i]);
    }
  })
  .catch((error) => {
    console.error('Error fetching data:', error);
  });

Array.from(links).forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    links.forEach((link) => {
      link.classList.remove("active");
    });
    link.classList.add("active");
    const jsonData = elements[link.dataset.num]; // lowercase the link text
    console.log(jsonData);
    /*fix from here */
    techName.textContent = jsonData.name;
    techImage.src = jsonData.images.portrait; // update src attribute of linkImg
    techDescription.textContent = jsonData.description;
})});