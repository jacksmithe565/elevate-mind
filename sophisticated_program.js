/* sophisticated_program.js */

// This code is a complex program that simulates a virtual pet management system
// It includes multiple classes and methods to handle various interactions and behaviors of virtual pets

// Class representing a virtual pet
class VirtualPet {
  constructor(name) {
    this.name = name;
    this.hunger = 50;
    this.energy = 50;
    this.happiness = 50;
  }

  feed() {
    this.hunger -= 10;
    this.energy += 5;
    this.happiness += 5;
  }

  play() {
    this.hunger += 5;
    this.energy -= 10;
    this.happiness += 10;
  }

  sleep() {
    this.hunger += 5;
    this.energy += 20;
    this.happiness += 5;
  }

  getStatus() {
    return `${this.name}: Hunger - ${this.hunger}, Energy - ${this.energy}, Happiness - ${this.happiness}`;
  }
}

// Class representing a virtual pet owner
class VirtualPetOwner {
  constructor(name) {
    this.name = name;
    this.pets = [];
  }

  adopt(pet) {
    this.pets.push(pet);
  }

  feedAllPets() {
    this.pets.forEach(pet => pet.feed());
  }

  playWithAllPets() {
    this.pets.forEach(pet => pet.play());
  }

  putAllPetsToSleep() {
    this.pets.forEach(pet => pet.sleep());
  }

  getPetStatuses() {
    return this.pets.map(pet => pet.getStatus());
  }
}

// Create virtual pets
const pet1 = new VirtualPet("Fluffy");
const pet2 = new VirtualPet("Buster");
const pet3 = new VirtualPet("Max");

// Create virtual pet owner
const owner = new VirtualPetOwner("John");

// Adopt pets
owner.adopt(pet1);
owner.adopt(pet2);
owner.adopt(pet3);

// Interact with pets
owner.feedAllPets();
owner.playWithAllPets();
owner.putAllPetsToSleep();

// Print pet statuses
console.log(owner.getPetStatuses());
