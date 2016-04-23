import React from 'react';
import Board from './board';

// private constants
const DEFAULT_WIDTH = 40;
const DEFAULT_HEIGHT = 40;
// not in the UI, but we can configure any survive or born conditions we want!
const DEFAULT_SURVIVE_CONDITION = [2, 3];
const DEFAULT_BORN_CONDITION = [3];
const DISPLAY_REFRESH_TIME = 500;


class GameOfLife extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      board: this._getNewBoard(DEFAULT_WIDTH, DEFAULT_HEIGHT),
      width: DEFAULT_WIDTH,
      height: DEFAULT_HEIGHT,
      generation: 0
    };

    this.handleCellClick = this.handleCellClick.bind(this);
    this._tick = this._tick.bind(this);
  }

  componentDidMount() {
    this.generation = 0;
  }

  componentWillUnmount() {
    stop();
  }

  handleCellClick(x, y) {
    this.state.board[x][y] = ! this.state.board[x][y];
    this.setState({ board: this.state.board });
  }

  start() {
    this.timer = setInterval(this._tick, DISPLAY_REFRESH_TIME);
  }

  stop() {
    clearInterval(this.timer);
  }

  reset() {
    this.setState({
      board: this._getNewBoard(this.state.width, this.state.height),
      generation: 0
    });
  }

  clear() {
    const newBoard = [];
    for (let x = 0; x < this.state.width; x++) {
      newBoard[x] = new Array(this.state.height);
      for (let y = 0; y < this.state.height; y++) {
        newBoard[x][y] = false;
      }
    }
    this.setState({ board: newBoard, generation: 0 });
  }

  resize(width, height) {
    if (width < 1 || height < 1) {
      return;
    }

    this.setState({
      board: this._getNewBoard(width, height),
      width,
      height,
      generation: 0
    });
  }

  _getNewBoard(width, height) {
    const newBoard = [];

    for (let x = 0; x < width; x++) {
      newBoard[x] = new Array(height);
      for (let y = 0; y < height; y++) {
        newBoard[x][y] = Math.floor(Math.random() * 2) !== 0;
      }
    }

    return newBoard;
  }

  _tick() {
    const newBoard = [];
    for (let x = 0; x < this.state.width; x++) {
      newBoard[x] = new Array(this.state.height);
      for (let y = 0; y < this.state.height; y++) {
        let nextState = this.state.board[x][y];
        if (this._doesCellDie(x, y)) {
          nextState = false;
        }

        if (this._isCellBorn(x, y)) {
          nextState = true;
        }

        newBoard[x][y] = nextState;
      }
    }

    this.state.generation++;
    this.setState({ board: newBoard, generation: this.state.generation });
  }

  _printBoard() {
    let output = '';

    for (let y = 0; y < this.state.height; y++) {
      for (let x = 0; x < this.state.width; x++) {
        output += this.state.board[x][y] ? 'X' : '_';
      }
      output += '\n';
    }

    return output;
  }

  _getPosition(x, y) {
    const width = this.state.width;
    const height = this.state.height;
    return this.state.board[(x + width) % width][(y + height) % height];
  }

  _getNeighborCount(x, y) {
    let count = 0;

    // iterate around the "box" surrounding the cell.
    for (let i = x - 1; i <= x + 1; i++) {
      for (let j = y - 1; j <= y + 1; j++) {
        // ignore the cell itself
        if (i === x && j === y) {
          continue;
        }

        if (this._getPosition(i, j)) {
          count++;
        }
      }
    }

    return count;
  }

  _doesCellDie(x, y) {
    const neighborCount = this._getNeighborCount(x, y);
    return DEFAULT_SURVIVE_CONDITION.indexOf(neighborCount) < 0;
  }

  _isCellBorn(x, y) {
    const neighborCount = this._getNeighborCount(x, y);
    return DEFAULT_BORN_CONDITION.indexOf(neighborCount) >= 0;
  }

  render() {
    return (
      <div>
        <Board
          board={this.state.board}
          width={this.state.width}
          height={this.state.height}
          pixelWidth={this.props.width}
          onCellClick={this.handleCellClick}
        />
        <div className="generation">
          {this.state.generation}
        </div>
      </div>
    );
  }
}

GameOfLife.propTypes = {
  width: React.PropTypes.number.isRequired
};

export default GameOfLife;
