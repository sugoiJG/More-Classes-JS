
// Create a class called Animal that has a name property and a speak method. Then, create a class called Dog that extends Animal and has an additional breed property and a bark method.

class Animal {
    constructor(name) {
      this.name = name;
    }
    speak() {
      console.log(`${this.name} makes a noise.`);
    }
  }
  
  class Dog extends Animal {
    constructor(name, breed) {
      super(name);
      this.breed = breed;
    }
    bark() {
      console.log(`${this.name} the ${this.breed} barks loudly!`);
    }
  }
  
  let animal1 = new Animal('Jax');
  animal1.speak();
  
  let dog1 = new Dog('Jax', 'Australian Shepherd');
  dog1.speak(); 
  dog1.bark();
  


// Create a class called Shape that has a name property and a calculateArea method. Then, create a class called Circle that extends Shape and has an additional radius property and overrides the calculateArea method to calculate the area of a circle.

class Shape {
    constructor(name) {
      this.name = name;
    }
    calculateArea() {
      console.log('Error: No area calculation defined for ' + this.name);
    }
  }
  
  class Circle extends Shape {
    constructor(radius) {
      super('circle');
      this.radius = radius;
    }
    calculateArea() {
      console.log('Area of circle:', Math.PI * this.radius ** 2);
    }
  }
  
  let circle1 = new Circle(20);
  circle1.calculateArea();
  


// Create a class called Vehicle that has a make and model property and a drive method. Then, create a class called Car that extends Vehicle and has an additional numWheels property and a honk method.

class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  } drive() {
    console.log()
  }
}
let vehicle1 = new Vehicle("Mazda", "3")

// Create a class called Person that has a name and age property and a greet method. Then, create a class called Student that extends Person and has an additional major property and overrides the greet method to include their major.