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
class Rover {
  constructor(name) {
    this.name = name;
    this.direction = 'N';
    this.x = 0;
    this.y = 0;
    this.travelLog = [];
  }
  turnLeft() {
    switch (this.direction) {
      case 'N':
        this.direction = 'W';
        break;
      case 'W':
        this.direction = 'S';
        break;
      case 'S':
        this.direction = 'E';
        break;
      case 'E':
        this.direction = 'N';
        break;
      default:
        return;
    }
    return this;
  }
  turnRight() {
    switch (this.direction) {
      case 'N':
        this.direction = 'E';
        break;
      case 'E':
        this.direction = 'S';
        break;
      case 'S':
        this.direction = 'W';
        break;
      case 'W':
        this.direction = 'N';
        break;
      default:
        return;
    }
    return this;
  }
  moveForward() {
    switch (this.direction) {
      case 'N':
        if (this.y > 0) {
          if (grid[this.y - 1][this.x] !== null) {
            console.log('Obstacle found!');
          } else {
            this.y -= 1;
          }
        }
        break;
      case 'E':
        if (this.x < 9) {
          if (grid[this.y][this.x + 1] !== null) {
            console.log('Obstacle found!');
          } else {
            this.x += 1;
          }
        }
        break;
      case 'S':
        if (this.y < 9) {
          if (grid[this.y + 1][this.x] !== null) {
            console.log('Obstacle found!');
          } else {
            this.y += 1;
          }
        }
        break;
      case 'W':
        if (this.x > 0) {
          if (grid[this.y][this.x - 1] !== null) {
            console.log('Obstacle found!');
          } else {
            this.x -= 1;
          }
        }
        break;
      default:
        return;
    }
    this.travelLog.push([this.x, this.y]);
  }
  moveBackward() {
    switch (this.direction) {
      case 'N':
        if (this.y < 9) {
          if (grid[this.y + 1][this.x] !== null) {
            console.log('Obstacle found!');
          } else {
            this.y += 1;
          }
        }
        break;
      case 'E':
        if (this.x > 0) {
          if (grid[this.y][this.x - 1] !== null) {
            console.log('Obstacle found!');
          } else {
            this.x -= 1;
          }
        }
        break;
      case 'S':
        if (this.y > 0) {
          if (grid[this.y - 1][this.x] !== null) {
            console.log('Obstacle found!');
          } else {
            this.y -= 1;
          }
        }
        break;
      case 'W':
        if (this.x < 9) {
          if (grid[this.y][this.x + 1] !== null) {
            console.log('Obstacle found!');
          } else {
            this.x += 1;
          }
        }
        break;
      default:
        return;
    }
    this.travelLog.push([this.y, this.x]);
  }
  roverController(commands) {
    const [prevY, prevX] = [this.y, this.x];
    for (let i = 0; i < commands.length; i++) {
      switch (commands.charAt(i)) {
        case 'f':
          this.moveForward();
          break;
        case 'b':
          this.moveBackward();
          break;
        case 'r':
          this.turnRight();
          break;
        case 'l':
          this.turnLeft();
          break;
        default:
          break;
      }
    }
    grid[prevY][prevX] = null;
    grid[this.y][this.x] = this.name;
    console.log(this.travelLog);
    console.table(grid);
    return this;
  }
}
// roverController('rffrfflfrff');
// roverController('ffzzy');
