import createContent from './home.js';
import createMenu from './menu.js';
import createContact from './contact.js'
import './style.css'

//code for tab buttons that cals function to switch
const homeButton = document.querySelector('#home-button');
homeButton.addEventListener('click', () => {
    clearDom();
    createContent();
});

const menuButton = document.querySelector('#menu-button');
menuButton.addEventListener('click', () => {
    clearDom()
    createMenu()
})

const contactButton = document.querySelector('#contact-button');
contactButton.addEventListener('click', () => {
    clearDom();
    createContact();
})

//function to clear dom before switching tabs
function clearDom() {
    const content = document.querySelector('#content');
    while (content.firstChild) {
        content.removeChild(content.lastChild)
    }
}

//adding image to header
const headerDiv = document.querySelector('#h-text-image');
const headerImage = document.createElement('img');
headerImage.src = "/home/aristotleboi/repos/restaurant-page/src/ramen-logo.png";
headerImage.alt = "a cute little picture of a bowl of ramen";
headerImage.setAttribute('id', 'header-image')
headerDiv.appendChild(headerImage)

//initial page load
createContent()


