/*
 * super:
 * 1. super.method(): reuse parent class method in derived class
 * 2. super() in derived class before access this and return created object
 *
 *  */

class Animal {
  constructor(type) {
    this.type = type;
  }

  running() {
    console.log(this.type + " running");
  }
}

class Dog extends Animal {
  constructor(type, age) {
    // calling super first to initialize before access this
    super(type);
    this.age = age;
  }

  running() {
    // calling parent class method
    super.running();
    console.log("I am " + this.age + " old");
  }
}

const tangbao = new Dog("Pomeranian", 2);

tangbao.running();
