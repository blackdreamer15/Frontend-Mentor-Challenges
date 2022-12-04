import data from './data.json';


//======== START OF DESTINATION PAGE SCRIPT ============
//DESTINATION -- IMAGES IMPORT
import moonImg from '/src/assets/destination/image-moon.webp';
import marsImg from '/src/assets/destination/image-mars.webp';
import europaImg from '/src/assets/destination/image-europa.webp';
import titanImg from '/src/assets/destination/image-titan.webp';


const gotoMoon = document.querySelector('.destination__moon');
const gotoMars = document.querySelector('.destination__mars');
const gotoEuropa = document.querySelector('.destination__europa');
const gotoTitan = document.querySelector('.destination__titan');

const destinationImg = document.querySelector('#destination__img');
const destinationHeading = document.querySelector('#destination__title');
const destinationDesc = document.querySelector('#destination__desc');
const travelDistance = document.querySelector('#destination__distance-in-km');
const travelDuration = document.querySelector('#destination__travel-duration');




//======== END OF DESTINATION PAGE SCRIPT ============