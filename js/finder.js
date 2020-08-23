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
    minimum: '',
    maximun: '',
    doors: '',
    transmission: '',
    color: ''
};

// Events
// Event Listener DOM Loaded
document.addEventListener('DOMContentLoaded', () => { showCars(cars); });

// Event Listener for the form

const brand = document.querySelector('#brand');
brand.addEventListener('input', (event) => {
    dataFind.brand = event.target.value;
    carFilter();
});

const year = document.querySelector('#year');
year.addEventListener('input', (event) => {
    dataFind.year = Number(event.target.value);
    carFilter();
});

const minimun = document.querySelector('#minimun');
minimun.addEventListener('input', (event) => {
    dataFind.minimun = Number(event.target.value);
    carFilter();
});

const maximun = document.querySelector('#maximun');
maximun.addEventListener('input', (event) => {
    dataFind.maximun = Number(event.target.value);
    carFilter();
});

const doors = document.querySelector('#doors');
doors.addEventListener('input', (event) => {
    dataFind.doors = Number(event.target.value);
    carFilter();
});

const transmission = document.querySelector('#transmission');
transmission.addEventListener('input', (event) => {
    dataFind.transmission = event.target.value;
    carFilter();
});

const color = document.querySelector('#color');
color.addEventListener('input', (event) => {
    dataFind.color = event.target.value;
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
function cleanHTML(){
      // Read de Result Node
    const result = document.querySelector('#result');

    // Clean the old result to show the news
    while (result.firstChild) {
        result.removeChild(result.firstChild);
    }
}

function showCars(cars) {

    // Read de Result Node
    const result = document.querySelector('#result');

    cleanHTML();

    // build the HTML of carss
    cars.forEach((car) => {
        const carHTML = document.createElement('p');
        carHTML.innerHTML = `
                <p>${car.brand} ${car.model} - ${car.year} - ${car.doors} Doors - 
                Transmission: ${car.transmission} - Price: $${car.price} - Color: ${car.color} 
                </p>
            `;
        result.appendChild(carHTML);
    });

}

function noResult(){
cleanHTML();
const noResult = document.createElement('div'); 
noResult.classList.add('alert','error');
noResult.appendChild(document.createTextNode("There's not result"));
document.querySelector('#result').appendChild(noResult);
}

function carFilter() {
    const result = retrieveCars()
        .filter(filterBrand)
        .filter(filterYear)
        .filter(filterMaximun)
        .filter(filterMinimun)
        .filter(filterDoors)
        .filter(filterTransmission)
        .filter(filterColor);
    if (result.length) {
        showCars(result);
    } else {
       noResult();
    }
}

function filterBrand(car) {
    if (dataFind.brand) {
        return car.brand === dataFind.brand;
    } else {
        return car;
    }
}

function filterYear(car) {
    if (dataFind.year) {
        return car.year === dataFind.year;
    } else {
        return car;
    }
}

function filterMinimun(car) {

    if (dataFind.minimun) {
        return car.price >= dataFind.minimun;
    } else {
        return car;
    }
}

function filterMaximun(car) {
    if (dataFind.maximun) {
        return car.price <= dataFind.maximun;
    } else {
        return car;
    }
}

function filterDoors(car) {
    if (dataFind.doors) {
        return car.doors === dataFind.doors;
    } else {
        return car;
    }
}

function filterTransmission(car) {
    if (dataFind.transmission) {
        return car.transmission === dataFind.transmission;
    } else {
        return car;
    }
}

function filterColor(car) {
    if (dataFind.color) {
        return car.color === dataFind.color;
    } else {
        return car;
    }
}