function mainPage() {
    //Title
    const title = document.createElement('h1');
    title.textContent = "Resturante de Naranja";
    title.classList.add('titleStyle');

    //image
    const image = document.createElement('img');
    image.src = "../src/oranges.jpg";

    //Location
    const locationContainer = document.createElement('div');
    locationContainer.classList.add('homeContainterStyle');
    const locationTitle = document.createElement('h4');
    locationTitle.textContent = "Location";
    const locationText = document.createElement('p');
    locationText.textContent = "1800 orange grotto, Juice, Vermont";
    locationContainer.appendChild(locationTitle);
    locationContainer.appendChild(locationText);

    //Hours
    const hoursContainer = document.createElement('div');
    hoursContainer.classList.add('homeContainterStyle');
    const hoursTitle = document.createElement('h4');
    hoursTitle.textContent = 'Hours';
    const monday = document.createElement('p');
    const tuesday = document.createElement('p');
    const wednesday = document.createElement('p');
    const thursday = document.createElement('p');
    const friday = document.createElement('p');
    const saturday = document.createElement('p');
    const sunday = document.createElement('p');
    monday.textContent = 'Monday: 10am - 10pm';
    tuesday.textContent = 'Tuesday: 10am - 10pm';
    wednesday.textContent = 'Wednesday: 10am - 10pm';
    thursday.textContent = 'Thursday: 10am - 10pm';
    friday.textContent = 'Friday: 10am - 10pm';
    saturday.textContent = 'Saturday: 11am - 9pm';
    sunday.textContent = 'Sunday: Closed';
    hoursContainer.append(hoursTitle, monday, tuesday, wednesday, thursday, friday, saturday, sunday);

    //Statement
    const statementContainer = document.createElement('div');
    statementContainer.classList.add('homeContainterStyle');
    const statement = document.createElement('p');
    statement.textContent = "This is the most woderous resturant in the world. We serve the best oranges that will get you wnating to come back for more and more! Come down to resturante de Naranja to partake in our supreme cuisine.";
    statementContainer.appendChild(statement);

    return {title, image, statementContainer, locationContainer, hoursContainer};
}

export {mainPage};