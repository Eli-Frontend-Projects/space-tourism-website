const links = Array.from(document.getElementsByClassName("engineer-selector"));

// Get elements by ID within each link
const crewName = document.getElementById("crew-name");
const crewBio = document.getElementById("crew-bio");
const crewRole= document.getElementById("crew-role");
const crewImage= document.getElementById("crew-image");

let elements = [];

fetch("https://achrafedd.github.io/Space-Tourism/data.json")
  .then((res) => res.json())
  .then((data) => {
    for (let i = 0; i < data.crew.length; i++) {
      elements.push(data.crew[i]);
    }
  })
  .catch((error) => {
    console.error('Error fetching data:', error);
  });

Array.from(links).forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    links.forEach((link) => {
      link.classList.remove("active-engineer-selector");
    });
    link.classList.add("active-engineer-selector");
    const jsonData = elements[link.dataset.num]; // lowercase the link text
    /*fix from here */
    //console.log(jsonData);
    crewName.textContent = jsonData.name;
    crewImage.src = jsonData.images.png; // update src attribute of linkImg
    crewBio.textContent = jsonData.bio;
    crewRole.textContent = jsonData.role;
})});