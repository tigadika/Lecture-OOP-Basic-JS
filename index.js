//? object literal
const car = {
  brand: "Honda",
  engine: "1300cc",
  type: "Sedan",
};

const car2 = {
  brand: "Toyota",
  engine: "1500cc",
  type: "Sedan",
};

// console.log(car);
// console.log(car2);

//? Object instance / instance
//? class => cetakan untuk membuat obj instance
//! penamaan class => aturan. 1. PascalCase = kata huruf awalnya harus kapital. 2. Singular = Car, SmartPhone

//? constructor => method/function untuk ngedefine property obejct instance

class Car {
  constructor(brand, engine = "1500cc", type) {
    this.brand = brand;
    this.engine = engine;
    this.type = type;
  }

  //? function => method
  startEngine() {
    console.log(`Engine ${this.engine} is starting`);
    console.log(`with type ${this.type}`);
    return this;
  }

  stopEngine() {
    console.log(`Engine ${this.engine} is stop`);
    return this;
  }

  running() {
    console.log(`Car ${this.brand} is running`);
    return this;
  }
}

//? jazz => instance/object instance
//? car => cetakan/class
//? new => proses untuk kita bikin object instance => instantiate

const jazz = new Car("Honda", "1500cc", "Hatchback");
const camry = new Car("Toyota", undefined, "Sedan");

// console.log(jazz);
console.log(camry);

//? method chaining
// Array.join(" ").split(" ");

camry.startEngine().running();
