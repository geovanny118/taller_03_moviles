
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
const tileSize = 10;
const width = 50;
const height = 50;
canvas.width = tileSize * width;
canvas.height = tileSize * height;
const FPS = 10;
let score = 0;
let snake = [
    { x: 25, y: 25 },
    { x: 24, y: 25 },
    { x: 23, y: 25 },
];
let food = { x: 0, y: 0 };
let direction = "right";
let gameOver = false;

// Función principal del juego
function gameLoop() {
    if (gameOver) {
        return;
    }
    setTimeout(function () {
        clearCanvas();
        drawSnake();
        moveSnake();
        drawFood();
        if (checkCollision()) {
            gameOver = true;
            alert("Game Over. Score: " + score);
            ///reset game
            score = 0;
            snake = [
                { x: 25, y: 25 },
                { x: 24, y: 25 },
                { x: 23, y: 25 },
            ];
            food = { x: 0, y: 0 };
            direction = "right";
            gameOver = false;
            generateFood();

        }
        gameLoop();
    }, 1000 / FPS);
}

// Función para borrar el canvas
function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// Función para dibujar la serpiente
function drawSnake() {
    ctx.fillStyle = "#fff";
    for (let i = 0; i < snake.length; i++) {
        ctx.fillRect(snake[i].x * tileSize, snake[i].y * tileSize, tileSize, tileSize);
    }
}

// Función para mover la serpiente
function moveSnake() {
    let head = { x: snake[0].x, y: snake[0].y };
    switch (direction) {
        case "up":
            head.y--;
            break;
        case "down":
            head.y++;
            break;
        case "left":
            head.x--;
            break;
        case "right":
            head.x++;
            break;
    }
    snake.unshift(head);
    if (head.x === food.x && head.y === food.y) {
        score++;
        generateFood();
    } else {
        snake.pop();
    }
}

// Función para dibujar la comida
function drawFood() {
    ctx.fillStyle = "#f00";
    ctx.fillRect(food.x * tileSize, food.y * tileSize, tileSize, tileSize);
}

// Función para generar comida aleatoria
function generateFood() {
    food = {
        x: Math.floor(Math.random() * width),
        y: Math.floor(Math.random() * height),
    };
    if (checkCollisionWithSnake(food)) {
        generateFood();
    }
}

// Función para verificar colisión con la serpiente
function checkCollisionWithSnake(position) {
    for (let i = 0; i < snake.length; i++) {
        if (snake[i].x === position.x && snake[i].y === position.y) {
            return true;
        }
    }
    return false;
}

// Función para verificar colisión
function checkCollision() {
// Verificar colisión con paredes
    let head = snake[0];
    if (head.x < 0 || head.x >= width || head.y < 0 || head.y >= height) {
        return true;
    }
// Verificar colisión con la serpiente
    for (let i = 1; i < snake.length; i++) {
        if (head.x === snake[i].x && head.y === snake[i].y) {
            return true;
        }
    }
    return false;
}

// Función para manejar el input del usuario
document.addEventListener("keydown", function (event) {
    switch (event.keyCode) {
        case 87: // W
            if (direction !== "down") {
                direction = "up";
            }
            break;
        case 83: // S
            if (direction !== "up") {
                direction = "down";
            }
            break;
        case 65: // A
            if (direction !== "right") {
                direction = "left";
            }
            break;
        case 68: // D
            if (direction !== "left") {
                direction = "right";
            }
            break;
    }
});


// Función para guardar la puntuación en Firebase
function saveScoreToFirebase(uuid, score) {

}

// Función para finalizar el juego
function endGame() {


    // Guardar la puntuación en Firebase
    const uuid = "A11212122121"+Math.floor(Math.random() *+Date.now());
    saveScoreToFirebase(uuid, score);

    // Mostrar un mensaje de fin de juego y reiniciar
    alert("Game over! Score: " + score);
    resetGame();
}

// Función para reiniciar el juego
function resetGame() {
    snake = [
        { x: 25, y: 25 },
        { x: 24, y: 25 },
        { x: 23, y: 25 },
    ];
    score = 0;
    direction = "right";
    gameOver = false;
    generateFood();

// Iniciar el loop del juego
    gameLoop();

}

// Generar comida inicial
generateFood();

// Iniciar el loop del juego
gameLoop();

// Iniciar el loop del juego
