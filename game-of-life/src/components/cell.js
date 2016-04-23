import React from 'react';

const Cell = (props) => (
  <div
    className={ props.isAlive ? 'cell-alive' : 'cell-dead' }
    style={{
      height: props.size,
      width: props.size,
      float: 'left'
    }}
    onClick={() => { props.onCellClick(props.xPos, props.yPos); } }
  />
);

Cell.propTypes = {
  xPos: React.PropTypes.number.isRequired,
  yPos: React.PropTypes.number.isRequired,
  size: React.PropTypes.number.isRequired,
  isAlive: React.PropTypes.bool.isRequired,
  onCellClick: React.PropTypes.func.isRequired
};

export default Cell;
