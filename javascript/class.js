


//Polymorphism
//Same method behaves differently in different classes (often through method overriding).
class Shape {
  draw() {
    console.log("Drawing a shape");
  }
}

class Circle extends Shape {
  draw() {
    console.log("Drawing a circle");
  }
}

const shape = new Shape();
const circle = new Circle();

shape.draw();  // Drawing a shape
circle.draw(); // Drawing a circle


//------------------------------------------------------------------------------------------------------------------------------------------


//super keyword is to call constructor of parent class and access methods of parent class
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name); // call parent constructor with name
    this.breed = breed;
  }

  speak() {
    super.speak(); // call parent speak method
    console.log(`${this.name} barks`);
  }
}

const myDog = new Dog("Bruno", "Labrador");
myDog.speak();
