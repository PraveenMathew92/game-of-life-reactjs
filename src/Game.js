import React from 'react';
import './Game.css';
import {CELL_SIZE, HEIGHT, WIDTH} from './constants';
import Cell from './Cell';

class Game extends React.Component {
    constructor() {
        super();
        this.rows = HEIGHT/CELL_SIZE;
        this.columns = WIDTH/CELL_SIZE;
        this.board = this.makeEmptyBoard();
    }
    state = { cells: [] };

    makeEmptyBoard() {
        let board = [];
        for(var i = 0; i < this.rows; i++) {
            board[i] = [];
            for(var j = 0; j < this.columns; j++) {
                board[i][j] = false;
            }
        }
        return board
    }

    makeCells() {
        let cells = []
        for(var i = 0; i < this.rows; i++){
            for (var j = 0; j < this.columns; j++ ) {
                if(this.board[i][j]) {
                    cells.push({x: j, y: i});
                }
            }
        }
        return cells;
    }

    getElementOffset() {
        const rect = this.boardRef.getBoundingClientRect();
        const doc = document.documentElement;
        return { x: (rect.left + window.pageXOffset) - doc.clientLeft, y: (rect.top + window.pageYOffset) - doc.clientTop };
    }

    handleClick = (event) => {
        const elemOffset = this.getElementOffset();
        const offsetX = event.clientX - elemOffset.x;
        const offsetY = event.clientY - elemOffset.y;
        const x = Math.floor(offsetX / CELL_SIZE);
        const y = Math.floor(offsetY / CELL_SIZE);
        if (x >= 0 && x <= this.columns && y >= 0 && y <= this.rows) {
            this.board[y][x] = !this.board[y][x];
        }
        this.setState({ cells: this.makeCells() })
    }

    render() {
        return (
            <div>
                <div className="Board" 
                    style={{ width: WIDTH, height: HEIGHT, backgroundSize: `${CELL_SIZE}px ${CELL_SIZE}px`}}  
                    onClick={this.handleClick}
                    ref={(n) => { this.boardRef = n; }}>
                { this.state.cells.map(cell => (
                    <Cell x={cell.x} y={cell.y} key={`${cell.x},${cell.y}`} />
                )) }
                </div>
            </div>
        )
    }
}
export default Game;