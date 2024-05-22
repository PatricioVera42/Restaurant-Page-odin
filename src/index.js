import aboutPage from "./about";
import homePage from "./home";
import menuPage from "./menu";

let currentPage = document.getElementById('content');
const homeButton = document.getElementById('home-button');
const menuButton = document.getElementById('menu-button');
const aboutButton = document.getElementById('about-button');

currentPage.appendChild(homePage);

function clearPage(){
    while (currentPage.firstChild){
        currentPage.removeChild(currentPage.firstChild);
    }
}

homeButton.addEventListener("click",() => {
    clearPage();
    currentPage.appendChild(homePage);
})

menuButton.addEventListener("click",() => {
    clearPage();
    currentPage.appendChild(menuPage);
})

aboutButton.addEventListener("click",() => {
    clearPage();
    currentPage.appendChild(aboutPage);
})

