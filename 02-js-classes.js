class Animal {
  constructor(name, mainColor, sound) {
    this.name = name;
    this.mainColor = mainColor;
    this.sound = sound;
  }
  scream(intensity){
    console.log(`${this.sound} ${'!'.repeat(intensity)}`);
  }
}

const dog = new Animal('doguinho', 'caramel', 'woof');
dog.scream(0);

// herança / inheritance
class Cat extends Animal {
  constructor(name, mainColor, sound, numberOfLegs){
    super(name, mainColor, sound);
    this.numberOfLegs = numberOfLegs;
  }
}

const cat1 = new Cat('José', 'Orange', 'Miau', 4);
cat1.scream(3);

class Chameleon extends Animal {
  constructor(name) {
    super(name, 'green', '...');
  }
  scream() {
    console.log('Chameleons don\'t produce sound');
  }
  changeColor(newColor) {
    this.mainColor = newColor;
  }
};

const chameleon1 = new Chameleon('Baltazar');
chameleon1.scream(4);
chameleon1.changeColor('red');
// chameleon1.mainColor = 'blue';
console.log(chameleon1);