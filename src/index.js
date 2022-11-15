import Wishlist from "./Wishist";

const submitForm = document.querySelector("#submitForm");

const makeInput = document.querySelector("#makeInput");
const modelInput = document.querySelector("#modelInput");
const yearInput = document.querySelector("#yearInput");

const pCarMake = document.querySelector("#car-make");
const pCarModel = document.querySelector("#car-model");
const pCarYear = document.querySelector("#car-year");

const removeButton = document.querySelector(".removeBtn");
const unorderedList = document.querySelector("ul");

submitForm.addEventListener("submit", addCar);
removeButton.addEventListener("click", removeCar);


const wishlist = new Wishlist();

function showCarDetails(car){
    pCarMake.textContent = car.make;
    pCarModel.textContent = car.model;
    pCarYear.textContent = car.year;
    removeButton.disabled = false;
    removeButton.setAttribute("data-carId", car.id);
}

function updateDOMList(){
    unorderedList.innerHTML = "";
    wishlist.list.forEach((car) => {
        const li = document.createElement("li");
        li.textContent = `${car.make} ${car.model}`;
        //Wait for the user to select one of their cars
        //from their wishlist
        //Then show that car's details to the right
        li.addEventListener("click", () =>{
            showCarDetails(car);
        });
        unorderedList.appendChild(li);
    });
}

function addCar(event) {
    event.preventDefault();
    //1. Updating the state of the program
    //This will receive the values from the form inputs
    wishlist.add(makeInput.value, modelInput.value, yearInput.value);
    //Updating the DOM to reflect that new state
    updateDOMList();
    makeInput.value = "";
    modelInput.value = "";
    yearInput.value = "";
}

function removeCar(){
    //1. Updating the state 
    let carId = Number(removeButton.getAttribute("data-carId"));
    wishlist.remove(carId);
    //2. Updating the DOM to reflect changes in state
    updateDOMList();
    pCarMake.textContent = "";
    pCarModel.textContent = "";
    pCarYear.textContent = "";
    removeButton.disabled = true;
}
