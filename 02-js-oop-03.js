// classes

// usando métodos!

// exemplo muito simples de banco imobiliário.

// cada item do array é uma das casas do jogo
const squares = [100, -10, 0, 0, -40, -10, -10, 5, 0, -10, -50, -10, 0, 0, -50, -10];

// inicialização do jogo

const throwDice = () => {
  return 1 + Math.floor(Math.random() * 6);
}

class Player {
  constructor(name, color) {
    this.name = name;
    this.color = color;
    this.position = 0;
    this.cash = 1000;
  }

  // método de mover / mudar a posição do jogador
  move() {
    let dice = throwDice();
    this.position = (this.position + dice) % squares.length;
    this.cash += squares[this.position];
    if (this.cash <= 0) {
      console.log(`Game Over para ${this.name}`);
    }
  }

  // método de mostrar informações
  displayInfo() {
    console.log(`${this.name} está na casa ${this.position} e tem ${this.cash}`);
  }
}

// -- inicializando jogadores
const player1 = new Player('Renata', 'Green');
const player2 = new Player('Hélio', 'Purple');
const player3 = new Player('Walison', 'Yellow');
const player4 = new Player('Jandson', 'Red');

// turno 1
player1.move();
player2.move();
player3.move();
player4.move();
// fim do turno 1
player1.displayInfo();
player2.displayInfo();
player3.displayInfo();
player4.displayInfo();

// como ele funciona
let player5 = new Player('Gabriel', 'Blue');
console.log(player5);
player5 = {};
player5.name = 'Gabriel';
player5.color = 'Blue';
player5.position = 0;
player5.cash = 1000;
player5.move = function move() {};
player5.displayInfo = function displayInfo() {};
console.log(player5);
