import { LEVEL, OBJECT_TYPE } from "./setup";

//Classes
import GameBoard from "./GameBoard";
import Pacman from "./Packman";

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

function gameLoop(pacman, ghost) {}

function startGame() {
  gameWin = false;
  powerPillActive = false;
  score = 0;
  startButton.classList.add("hide");

  gameBoard.createGrid(LEVEL);

  const packman = new Pacman(2, 287);
  gameBoard.addObject(287, [OBJECT_TYPE.PACMAN]);
  document.addEventListener("keydown", (e) =>
    packman.handleKeyInput(e, gameBoard.objectExist)
  );
}

// Initailize game
startButton.addEventListener("click", startGame);
