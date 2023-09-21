export default function menuPage(){
    //title
    const title = document.createElement('h1');
    title.textContent = "Menu";
    title.classList.add('titleStyle');

    //first item
    const orangesContainer = document.createElement('div');
    orangesContainer.classList.add('menuContainerStyle');
    const orangesTitle = document.createElement('h4');
    orangesTitle.textContent = "The Classic Orange";
    const orangeImage = document.createElement('img');
    orangeImage.src = "../src/oranges.jpg";
    const orangesDescription = document.createElement('p');
    orangesDescription.textContent = "The classic orange everyone knows and loves. Our oranges are locally grown and are the most fresh and juicy fruits you will ever soak your teeth in.";
    const orangeCost = document.createElement('h5');
    orangeCost.textContent = "Price: $10";
    orangesContainer.append(orangesTitle, orangesDescription, orangeCost, orangeImage);
    
    //second item
    const cakeContainer = document.createElement('div');
    cakeContainer.classList.add('menuContainerStyle');
    const cakeTitle = document.createElement('h4');
    cakeTitle.textContent = "Sicilian Whole Orange Cake";
    const cakeImage = document.createElement('img');
    cakeImage.src = "../src/orangeCake.jpeg";
    const cakeDescription = document.createElement('p');
    cakeDescription.textContent = "A cake made out of oranges with a divine smell";
    const cakeCost = document.createElement('h5');
    cakeCost.textContent = "Price: $25";
    cakeContainer.append(cakeTitle, cakeDescription, cakeCost, cakeImage);
    
    return {title, orangesContainer, cakeContainer}
}