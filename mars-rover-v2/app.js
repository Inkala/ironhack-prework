// Create grid with obstacles

function createGrid(obstacles) {
  const createdGrid = [...Array(10)].map(row => Array(10).fill(null));
  for (let i = 0; i < obstacles; i++) {
    createdGrid[Math.floor(Math.random() * 10)][
      Math.floor(Math.random() * 10)
    ] = 'X';
  }
  // Rover shouldn't start in an obstacle
  createdGrid[0][0] = null;
  return createdGrid;
}

const grid = createGrid(5);

// Rover Object Goes Here
// ======================
const rover = {
  direction: 'N',
  x: 0,
  y: 0,
  travelLog: []
};

// ======================
function turnLeft(rover) {
  switch (rover.direction) {
    case 'N':
      rover.direction = 'W';
      break;
    case 'W':
      rover.direction = 'S';
      break;
    case 'S':
      rover.direction = 'E';
      break;
    case 'E':
      rover.direction = 'N';
      break;
    default:
      return;
  }
}

function turnRight(rover) {
  switch (rover.direction) {
    case 'N':
      rover.direction = 'E';
      break;
    case 'E':
      rover.direction = 'S';
      break;
    case 'S':
      rover.direction = 'W';
      break;
    case 'W':
      rover.direction = 'N';
      break;
    default:
      return;
  }
}

function moveForward(rover) {
  switch (rover.direction) {
    case 'N':
      if (rover.y > 0) {
        if (grid[rover.y - 1][rover.x] === 'X') {
          console.log('Obstacle found');
        } else {
          rover.y -= 1;
        }
      }
      break;
    case 'E':
      if (rover.x < 9) {
        if (grid[rover.y][rover.x + 1] === 'X') {
          console.log('Obstacle found');
        } else {
          rover.x += 1;
        }
      }
      break;
    case 'S':
      if (rover.y < 9) {
        if (grid[rover.y + 1][rover.x] === 'X') {
          console.log('Obstacle found');
        } else {
          rover.y += 1;
        }
      }
      break;
    case 'W':
      if (rover.x > 0) {
        if (grid[rover.y][rover.x - 1] === 'X') {
          console.log('Obstacle found');
        } else {
          rover.x -= 1;
        }
      }
      break;
    default:
      return;
  }
  rover.travelLog.push([rover.x, rover.y]);
}

function moveBackward(rover) {
  switch (rover.direction) {
    case 'N':
      if (rover.y < 9) {
        if (grid[rover.y + 1][rover.x] === 'X') {
          console.log('Obstacle found');
        } else {
          rover.y += 1;
        }
      }
      break;
    case 'E':
      if (rover.x > 0) {
        if (grid[rover.y][rover.x - 1] === 'X') {
          console.log('Obstacle found');
        } else {
          rover.x -= 1;
        }
      }
      break;
    case 'S':
      if (rover.y > 0) {
        if (grid[rover.y - 1][rover.x] === 'X') {
          console.log('Obstacle found');
        } else {
          rover.y -= 1;
        }
      }
      break;
    case 'W':
      if (rover.x < 9) {
        if (grid[rover.y][rover.x + 1] === 'X') {
          console.log('Obstacle found');
        } else {
          rover.x += 1;
        }
      }
      break;
    default:
      return;
  }
  rover.travelLog.push([rover.x, rover.y]);
}

function roverController(commands) {
  for (let i = 0; i < commands.length; i++) {
    switch (commands.charAt(i)) {
      case 'f':
        moveForward(rover);
        break;
      case 'b':
        moveBackward(rover);
        break;
      case 'r':
        turnRight(rover);
        break;
      case 'l':
        turnLeft(rover);
        break;
      default:
        break;
    }
  }
  console.log(rover.travelLog);
  return rover;
}

roverController('rffrfflfrff');
// roverController('ffzzy');
