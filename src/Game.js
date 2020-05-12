import React from 'react';
import './Game.css';

const CELL_SIZE = 20;
const WIDTH = 800;
const HEIGHT = 600;

class Game extends React.Component {
    constructor() {
        super();
        this.rows = HEIGHT/CELL_SIZE;
        this.columns = WIDTH/CELL_SIZE;
        this.board = this.makeEmptyBoard();
    }
    state = { cells: [] }

    makeEmptyBoard() {
        let board = [];
        for(var i = 0; i <= this.rows; i++) {
            board[i] = [];
            for(var j = 0; j <= this.columns; j++) {
                board[i][j] = false;
            }
        }
        return board
    }

    render() {
        return (
            <div>
                <div className="Board" style={{ width: WIDTH, height: HEIGHT, backgroundSize: `${CELL_SIZE}px ${CELL_SIZE}px`}}  />
            </div>
        )
    }
}
export default Game;