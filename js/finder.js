// Create the years
import { cars } from './data.js';
const years = document.createElement('option');
const max = new Date().getFullYear();
let min = max - 10;

for (let i = max; i > min; i--) {
    let option = document.createElement('option');
    option.value = i;
    option.innerText = i;
    document.querySelector('#year').appendChild(option);
}

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
// Events

document.addEventListener('DOMContentLoaded', showCars);