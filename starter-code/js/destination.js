const links = Array.from(document.getElementsByClassName("inner-nav-link"));

// Get elements by ID within each link
const linkName = document.getElementById("link-name");
const linkImg = document.getElementById("link-img");
const linkDescription = document.getElementById("link-description");
const linkDistance = document.getElementById("link-distance");
const linkTravelTime = document.getElementById("link-travel-time");

let elements = {};

fetch("https://achrafedd.github.io/Space-Tourism/data.json")
  .then((res) => res.json())
  .then((data) => {
    for (let i = 0; i < data.destinations.length; i++) {
      elements[data.destinations[i].name.toLowerCase()] = data.destinations[i];
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
    const jsonData = elements[link.innerText.toLowerCase()]; // lowercase the link text
    linkName.textContent = link.innerText;
    linkImg.src = jsonData.images.png; // update src attribute of linkImg
    linkDescription.textContent = jsonData.description;
    linkDistance.textContent = jsonData.distance;
    linkTravelTime.textContent = jsonData.travel;
})});