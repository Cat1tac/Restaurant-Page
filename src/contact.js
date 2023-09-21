export default function contactPage(){
    //title
    const title = document.createElement('h1');
    title.textContent = "Contact";
    title.classList.add('titleStyle');

    //contact 1
    const storeContactContainer = document.createElement('div');
    storeContactContainer.classList.add('menuContainerStyle');
    const storeTitle = document.createElement('h4');
    storeTitle.textContent = 'Store Contact';
    const storeNumber = document.createElement('p');
    storeNumber.textContent = 'Number: (305)-454-2901';
    const storeEmail = document.createElement('p');
    storeEmail.textContent = 'naranjaRes@gmail.com'
    const storeImage = document.createElement('img');
    storeImage.src = '../src/mcDonalds.jpeg'
    storeContactContainer.append(storeTitle, storeNumber, storeEmail, storeImage);

    //contact 2
    const ownerContainer = document.createElement('div');
    ownerContainer.classList.add('menuContainerStyle');
    const ownerTitle = document.createElement('h4');
    ownerTitle.textContent = 'Owner Contact';
    const ownerNumber = document.createElement('p');
    ownerNumber.textContent = 'Number: (305)-431-0945';
    const ownerEmail = document.createElement('p');
    ownerEmail.textContent = 'JynxBlack@gmail.com'
    const ownerImage = document.createElement('img');
    ownerImage.src = '../src/owner.jpg'
    ownerContainer.append(ownerTitle, ownerNumber, ownerEmail, ownerImage);
    
    return {title, storeContactContainer, ownerContainer}
}