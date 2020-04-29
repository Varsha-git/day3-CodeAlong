var board = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160];
console.log(board);
const player1_button = document.getElementById("player-1");
const player2_button = document.getElementById("player-2");
console.log(player1_button);
console.log(player2_button);
player1_button.addEventListener('click', rollDice_1);
player2_button.addEventListener('click', rollDice_1);

var player1 = ["Prograd", 0, 1000];
var player2 = ["FACEPrep", 0, 1000];

function rollDice_1() {
    let position = Math.floor(Math.random() * 6) + 1;
    console.log("player roll one " + position);
    changePosition_1(player1[1], position);
}

function changePosition_1(old, currentPosition) {
    new_position = old + currentPosition;
    player1[1] = new_position;
    console.log(player1[1]);
    updateMoney(player1[1]);

}

function updateMoney(p1) {
    if (p1 < board.length)
        var updateMoney = player1[2] - board[p1 - 1];
    else {
        p2 = p1 % 15;
        updateMoney = player1[2] - board[p1 - 1];
    }
    console.log(updateMoney);
}

function rollDice_2() {
    let position = Math.floor(Math.random() * 6) + 1;
    console.log("player roll one " + position);
    changePosition_1(player2[1], position);
}

function changePosition_1(old, currentPosition) {
    new_position = old + currentPosition;
    player2[1] = new_position;
    console.log(player2[1]);
    updateMoney(player2[1]);

}

function updateMoney(p2) {
    if (p2 < board.length)
        var updateMoney = player2[2] - board[p2 - 1];
    else {
        p2 = p2 % 15;
        updateMoney = playe21[2] - board[p2 - 1];
    }
    console.log(updateMoney);
}