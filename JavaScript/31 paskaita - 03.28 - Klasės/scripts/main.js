// function car(make, model, year){
//   return {
//     make: make,
//     model: model,
//     year: year
//   }
// }

class Car{
  #make; #model; #year; #color; #basePrice; #engineType;
  constructor(make, model, year, basePrice, engineType){
    this.#make = make;
    this.#model = model;
    this.#year = year;
    this.#color = `rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`; // rgb 0-255 *3
    this.#basePrice = basePrice;
    this.#engineType = engineType;
  }
  getMake(){
    return this.#make;
  }
  setMake(newMake){
    this.#make = newMake;
  }
  getModel(){
    return this.#model;
  }
  setModel(newModel){
    this.#model = newModel;
  }
  getYear(){
    return this.#year;
  }
  setYear(newYear){
    this.#year = newYear;
  }
  getColor(){
    return this.#color;
  }
  setColor(newColor){
    this.#color = newColor;
  }
  getEngineType(){
    return this.#engineType;
  }
  setEngineType(newEngineType){
    this.#engineType = newEngineType;
  }
  getBasePrice(){
    return this.#basePrice;
  }
  getPrice(){
    switch(this.#engineType){
      case 'gas':
        return this.#basePrice+300;
      case 'petrol':
        return this.#basePrice+600;
      case 'electric':
        return this.#basePrice+2500;
      default:
        return this.#basePrice;
    }
  }
  
  turnEngineOn(){
    return 'Vroom!!!';
  }
  getCarAge(){
    return new Date().getFullYear() - this.#year;
  }
}

const cars = [
  new Car('Volkswagen', 'Passat', 2005, 500, 'gas'),
  new Car('Audi', 'TT', 2010, 1200, 'petrol'),
  new Car('BMW', '6', 2015, 3400, 'electric'),
  new Car('Fiat', 'Punto', 2001, 400, 'petrol')
];

console.log(cars);
console.log(cars[0].make);
// console.log(cars[0].#make);
console.log(cars[0].getMake());