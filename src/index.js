import './style.css';
import './mcDonalds.jpeg';
import './orangeCake.jpeg';
import './oranges.jpg';
import './owner.jpg';
import {mainPage} from './home';
import menuPage from './menu';
import contactPage from './contact';

const display = document.querySelector('#content');
display.appendChild(mainPage().title);
display.appendChild(mainPage().statementContainer);
display.appendChild(mainPage().hoursContainer);
display.appendChild(mainPage().locationContainer);


const pages = document.querySelectorAll(".page");
pages.forEach((page) => {
    page.addEventListener('click', () => {
        while(display.firstChild) {
            display.removeChild(display.firstChild);
        }
        
        if (page.textContent == "Home") {
            display.appendChild(mainPage().title);
            display.appendChild(mainPage().statementContainer);
            display.appendChild(mainPage().hoursContainer);
            display.appendChild(mainPage().locationContainer);
        } else if(page.textContent == "Menu") {
            display.appendChild(menuPage().title);
            display.appendChild(menuPage().orangesContainer);
            display.appendChild(menuPage().cakeContainer);
        } else {
            display.appendChild(contactPage().title);
            display.appendChild(contactPage().storeContactContainer);
            display.appendChild(contactPage().ownerContainer);
        }
    });
});


//add ability to swap menus and content for menu and contact