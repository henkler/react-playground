import React from 'react';
import GameOfLife from './gameofLife';

const DEFAULT_SIZE_IN_PIXELS = 800;

class Main extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="jumbotron">
          <h1>Conway's Game of Life</h1>
        </div>
        <div className="row text-center">
          <div className="col-xs-12">
            <button
              type="button"
              className="btn btn-success"
              onClick={ () => this.refs.game.start() }
            >Run
            </button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={ () => this.refs.game.stop() }
            >Pause
            </button>
            <button
              type="button"
              className="btn btn-info"
              onClick={ () => this.refs.game.reset() }
            >Reset
            </button>
            <button
              type="button"
              className="btn btn-default"
              onClick={ () => this.refs.game.clear() }
            >Clear
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <GameOfLife ref="game" width={DEFAULT_SIZE_IN_PIXELS} />
          </div>
        </div>
        <div className="row text-center">
          <div className="col-xs-12">
            <button
              type="button"
              className="btn btn-default"
              onClick={ () => this.refs.game.resize(20, 20) }
            >20 x 20
            </button>
            <button
              type="button"
              className="btn btn-default"
              onClick={ () => this.refs.game.resize(40, 40) }
            >40 x 40
            </button>
            <button
              type="button"
              className="btn btn-default"
              onClick={ () => this.refs.game.resize(80, 80) }
            >80 x 80
            </button>
            <button
              type="button"
              className="btn btn-default"
              onClick={ () => this.refs.game.resize(160, 160) }
            >160 x 160
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
