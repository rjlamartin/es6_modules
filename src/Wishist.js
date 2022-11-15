import Car from "./Car.js";

export default class Wishlist{

    //list = [];
    //nextId = 0;
    constructor(){
        this.list = [];
        this.nextId = 0;
    }

    add(make, model, year){
        //increment before assignment
        //2 assignments happening
        //this,nextId = this.nextId + 1;
        //the parameter getting passed into the Car constructor = this.nextId;
        
        //new Car(++this.nextId, make, model, year); -->
        this.list.push(new Car(++this.nextId, make, model, year));
        //car.id values in this.list => [1, 2, 3, 4, 5, ...]
        //The indexes of those values=> [0, 1, 2, 3, 4, ...]
    }

    remove(carId){
        //Remove an element from an array
        //1. For in/of loop
        //2. Splice
        //3. Filter

        ////Removes ALL cars with that id
        //this.list = this.list.filter((car) => {
           // return car.id != carId;
        //});

        //this.list.splice(carId - 1, 1);
        //wouldn't work
        //First, find the index, of the item that I want removed
        //Removes the FIRST car that has that id
        const index = this.list.findIndex((item) => {
            return item.id == carId;
        });
        this.list.splice(index, 1);

    }

}