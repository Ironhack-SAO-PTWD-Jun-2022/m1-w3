// object literal

// exemplo muito simples de banco imobiliário.

// cada item do array é uma das casas do jogo
const squares = [100, -10, 0, 0, -40, -10, -10, 5, 0, -10, -50, -10, 0, 0, -50, -10];

// inicialização do jogo
let dice;

let player1 = {
  name: 'Caio',
  color: 'Blue',
  position: 0,
  cash: 1000
};

let player2 = {
  name: 'Hugo',
  color: 'Black',
  position: 0,
  cash: 1000
};

let player3 = {
  name: 'João Paulo',
  color: 'Orange',
  position: 0,
  cash: 1000
};

// -- primeiro turno!
// Math.random gera um número entre 0 e 0.9999999999999999

// 1 - 1.99999
// 2 - 2.99999
// 3 - 3.99999
// ...
// 6 - 6.99999
// const random = Math.random();
// console.log(random);
// const timesMax = random * 6;
// console.log(timesMax);
// const plusMin = timesMax + 1;
// console.log(plusMin);
// dice = Math.floor(plusMin);
// console.log(dice);

// turno 1 do jogador 1
dice = 1 + Math.floor(Math.random() * 6);
player1.position = (player1.position + dice) % squares.length;
player1.cash += squares[player1.position];
if (player1.cash <= 0) {
  console.log(`Game Over para o ${player1.name}`);
}

// turno 1 do jogador 2
dice = Math.floor(1 + Math.random() * 6);
player2.position = (player2.position + dice) % squares.length;
player2.cash += squares[player2.position];
if (player2.cash <= 0) {
  console.log(`Game Over para o ${player2.name}`);
}

// turno 1 do jogador 3
dice = Math.floor(1 + Math.random() * 6);
player3.position = (player3.position + dice) % squares.length;
player3.cash += squares[player3.position];
if (player3.cash <= 0) {
  console.log(`Game Over para o ${player3.name}`);
}

// mostrar rodada
console.log('-- fim do turno 1 --')
console.log(player1);
console.log(player2);
console.log(player3);


// turno 2 do jogador 1
dice = Math.floor(1 + Math.random() * 6);
player1.position = (player1.position + dice) % squares.length;
player1.cash += squares[player1.position];
if (player1.cash <= 0) {
  console.log(`Game Over para o ${player1.name}`);
};

// turno 2 do jogador 2
dice = Math.floor(1 + Math.random() * 6);
player2.position = (player2.position + dice) % squares.length;
player2.cash += squares[player2.position];
if (player2.cash <= 0) {
  console.log(`Game Over para o ${player2.name}`);
};

// turno 2 do jogador 3
dice = Math.floor(1 + Math.random() * 6);
player3.position = (player3.position + dice) % squares.length;
player3.cash += squares[player3.position];
if (player3.cash <= 0) {
  console.log(`Game Over para o ${player3.name}`);
};

// mostrar rodada
console.log('-- fim do turno 2 --')
console.log(player1);
console.log(player2);
console.log(player3);


