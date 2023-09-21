function mainPage() {
    const title = document.createElement('h1');
    title.textContent = "Resturante de Naranja";
    title.classList.add('titleStyle');

    const image = document.createElement('img');
    image.src = "../src/oranges.jpg";

    const locationContainer = document.createElement('div');
    const locationTitle = document.createElement('h4');
    const 

    const statement = document.createElement('p');
    statement.textContent = "This is the most woderous resturant in the world. We serve the best oranges that will get you wnating to come back for more and more! Come down to resturante de Naranja to partake in our supreme cuisine.";
    return {title, image, statement};
}

export {mainPage};