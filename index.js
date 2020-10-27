import { LEVEL, OBJECT_TYPE } from "./setup";
import { randomMovement } from "./ghostmoves";

//Classes
import GameBoard from "./GameBoard";
import Pacman from "./Packman";
import Ghost from "./Ghost";

// DOM Elements
const gameGrid = document.querySelector("#game");
const scoreTable = document.querySelector("#score");
const startButton = document.querySelector("#start-button");

//Game Constants
const POWER_PILL_TIME = 10000; //ms
const GLOBAL_SPEED = 88; //ms
const gameBoard = GameBoard.createGameBoard(gameGrid, LEVEL);

// Initial Setup
let score = 0;
let timer = null;
let gameWin = false;
let powerPillActive = false;
let powerPillTimer = null;

// Functions
function gameOver(pacman, grid) {}

function checkCollision(pacman, ghost) {}

function gameLoop(pacman, ghosts) {
  //console.log("works");
  // Move Pacman
  gameBoard.moveCharacter(pacman);

  // 3. Move ghosts
  ghosts.forEach((ghost) => gameBoard.moveCharacter(ghost));
}

function startGame() {
  gameWin = false;
  powerPillActive = false;
  score = 0;
  startButton.classList.add("hide");

  gameBoard.createGrid(LEVEL);

  const pacman = new Pacman(2, 287);
  gameBoard.addObject(287, [OBJECT_TYPE.PACMAN]);
  document.addEventListener("keydown", (e) =>
    pacman.handleKeyInput(e, gameBoard.objectExist)
  );

  const ghosts = [
    new Ghost(5, 188, randomMovement, OBJECT_TYPE.BLINKY),
    new Ghost(4, 209, randomMovement, OBJECT_TYPE.PINKY),
    new Ghost(3, 230, randomMovement, OBJECT_TYPE.INKY),
    new Ghost(2, 251, randomMovement, OBJECT_TYPE.CLYDE),
  ];

  // Gameloop
  timer = setInterval(() => gameLoop(pacman, ghosts), GLOBAL_SPEED);
}

// Initailize game
startButton.addEventListener("click", startGame);
