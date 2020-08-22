// Create the years
import { cars } from './data.js';

// Variables
const years = document.createElement('option');
const max = new Date().getFullYear();
let min = max - 10;

// Data for the Search

let dataFind = {
    brand: '',
    year: '',
    minimumPrice: '',
    maximunPrice: '',
    doors: '',
    transmission: '',
    color: ''
};

// Events
// Event Listener DOM Loaded
document.addEventListener('DOMContentLoaded', showCars);

// Event Listener for the form

const brand = document.querySelector('#brand');
brand.addEventListener('input', (event) => {
    dataFind.brand = event.target.value;
    carFilter();
});

for (let i = max; i > min; i--) {
    let option = document.createElement('option');
    option.value = i;
    option.innerText = i;
    document.querySelector('#year').appendChild(option);
}

// Functions
function retrieveCars() {
    return cars;
}

function showCars(cars) {

    // Read de Result Node
    const result = document.querySelector('#result');
    retrieveCars().forEach((car) => {
        const carHTML = document.createElement('p');
        carHTML.innerHTML = `
            <p>${car.brand} ${car.model} - ${car.year} - ${car.doors} Doors - 
            Transmission: ${car.transmision} - Price: $${car.price} - Color: ${car.color} 
            </p>
        `;
        result.appendChild(carHTML);
    });
}

function carFilter() {
    console.log('from car Filter');
}
