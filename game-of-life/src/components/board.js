import React from 'react';
import Cell from './cell';

class Board extends React.Component {
  _computeCellSize() {
    let cellSize = Math.floor(this.props.pixelWidth / this.props.width);
    if (cellSize < 1) {
      cellSize = 1;
    }

    return cellSize;
  }

  _computeTrueWidth() {
    return this.props.width * this._computeCellSize() + 10;
  }

  render() {
    const cellBoard = [];
    for (let y = 0; y < this.props.height; y++) {
      const cellRow = [];
      for (let x = 0; x < this.props.width; x++) {
        cellRow.push(
          <Cell
            key={`x${x}`}
            xPos={x}
            yPos={y}
            size={this._computeCellSize()}
            isAlive={this.props.board[x][y]}
            onCellClick={this.props.onCellClick}
          />);
      }
      cellBoard.push(
        <div key={`y${y}`} className="row">
          <div className="col-xs-12">
            {cellRow}
          </div>
        </div>
      );
    }
    return (
      <div
        className="board center-block"
        style={ { width: this._computeTrueWidth() } }
      >
        {cellBoard}
      </div>
    );
  }
}

Board.propTypes = {
  board: React.PropTypes.array.isRequired,
  width: React.PropTypes.number.isRequired,
  height: React.PropTypes.number.isRequired,
  pixelWidth: React.PropTypes.number.isRequired,
  onCellClick: React.PropTypes.func.isRequired
};

export default Board;
