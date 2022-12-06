import data from './data.json';


//======== START OF DESTINATION PAGE SCRIPT ============
const gotoMoon = document.querySelector('.destination__moon');
const gotoMars = document.querySelector('.destination__mars');
const gotoEuropa = document.querySelector('.destination__europa');
const gotoTitan = document.querySelector('.destination__titan');

const destinationImg = document.querySelector('#destination__img');
const destinationHeading = document.querySelector('#destination__title');
const destinationDesc = document.querySelector('#destination__desc');
const travelDistance = document.querySelector('#destination__distance-in-km');
const travelDuration = document.querySelector('#destination__travel-duration');


// MOON
gotoMoon.addEventListener('click', () => {
    destinationImg.src = data.destinations[0].images.webp;
    destinationHeading.innerHTML = data.destinations[0].name;
    destinationDesc.innerHTML = data.destinations[0].description;
    travelDistance.innerHTML = data.destinations[0].distance;
    travelDuration.innerHTML = data.destinations[0].travel;
});


// MARS
gotoMars.addEventListener('click', () => {
destinationImg.src = data.destinations[1].images.webp;
    destinationHeading.innerHTML = data.destinations[1].name;
    destinationDesc.innerHTML = data.destinations[1].description;
    travelDistance.innerHTML = data.destinations[1].distance;
    travelDuration.innerHTML = data.destinations[1].travel;
});


// EUROPA
gotoEuropa.addEventListener('click', () => {
    destinationImg.src = data.destinations[2].images.webp;
    destinationHeading.innerHTML = data.destinations[2].name;
    destinationDesc.innerHTML = data.destinations[2].description;
    travelDistance.innerHTML = data.destinations[2].distance;
    travelDuration.innerHTML = data.destinations[2].travel;
});


// TITAN
gotoTitan.addEventListener('click', () => {
    destinationImg.src = data.destinations[3].images.webp;
    destinationHeading.innerHTML = data.destinations[3].name;
    destinationDesc.innerHTML = data.destinations[3].description;
    travelDistance.innerHTML = data.destinations[3].distance;
    travelDuration.innerHTML = data.destinations[3].travel;
});
//======== END OF DESTINATION PAGE SCRIPT ============