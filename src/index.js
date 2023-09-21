import './style.css';
import {mainPage} from './home'
console.log(mainPage());

const display = document.querySelector('#content');
display.appendChild(mainPage().title);
display.appendChild(mainPage().image);
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
            display.appendChild(mainPage().image);
            display.appendChild(mainPage().statementContainer);
            display.appendChild(mainPage().hoursContainer);
            display.appendChild(mainPage().locationContainer);
        } else if(page.textContent == "Menu") {
            //menu content goes here
        } else {
            // Contact goes here
        }
    });
});


//add ability to swap menus and content for menu and contact