const toggleButton = document.getElementById('toggle-button');
const navElement = document.querySelector('nav');

toggleButton.addEventListener('click', () => {
    navElement.classList.toggle('nav-show');
});