// usando métodos!

// exemplo muito simples de banco imobiliário.

// cada item do array é uma das casas do jogo
const squares = [100, -10, 0, 0, -40, -10, -10, 5, 0, -10, -50, -10, 0, 0, -50, -10];

// inicialização do jogo

const throwDice = () => {
  return 1 + Math.floor(Math.random() * 6);
}

let player1 = {
  name: 'Caio',
  color: 'Blue',
  position: 0,
  cash: 1000,
  move() {
    let dice = throwDice();
    this.position = (this.position + dice) % squares.length;
    this.cash += squares[this.position];
    if (this.cash <= 0) {
      console.log(`Game Over para ${this.name}`);
    }
  },
  displayInfo() {
    console.log(`${this.name} está na casa ${this.position} e tem ${this.cash}`);
  }
};

let player2 = {
  name: 'Hugo',
  color: 'Black',
  position: 0,
  cash: 1000,
  move() {
    let dice = throwDice();
    this.position = (this.position + dice) % squares.length;
    this.cash += squares[this.position];
    if (this.cash <= 0) {
      console.log(`Game Over para ${this.name}`);
    }
  },
  displayInfo() {
    console.log(`${this.name} está na casa ${this.position} e tem ${this.cash}`);
  }
};

let player3 = {
  name: 'João Paulo',
  color: 'Orange',
  position: 0,
  cash: 1000,
  move() {
    let dice = throwDice();
    this.position = (this.position + dice) % squares.length;
    this.cash += squares[this.position];
    if (this.cash <= 0) {
      console.log(`Game Over para ${this.name}`);
    }
  },
  displayInfo() {
    console.log(`${this.name} está na casa ${this.position} e tem ${this.cash}`);
  }
};

// turno 1
player1.move();
player2.move();
player3.move();

// fim do turno 1
player1.displayInfo();
player2.displayInfo();
player3.displayInfo();

// turno 2
player1.move();
player2.move();
player3.move();

// fim do turno 2
player1.displayInfo();
player2.displayInfo();
player3.displayInfo();

// turno 3
player1.move();
player2.move();
player3.move();

// fim do turno 3
player1.displayInfo();
player2.displayInfo();
player3.displayInfo();