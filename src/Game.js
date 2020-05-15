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
    state = { cells: [], interval: 100, isRunning: false };

    updateInterval = (event) => {
        this.setState({interval: event.target.value})
    }

    startGame = () => {
        this.setState({ isRunning: true })
        this.runIteration(); 
    }

    stopGame = () => {
        this.setState({ isRunning: false })
        if (this.timeoutHandler) {      
            window.clearTimeout(this.timeoutHandler);      
        }
        this.timeoutHandler = null;
    }

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

    runIteration() { 
        let newBoard = this.makeEmptyBoard();
        for (let y = 0; y < this.rows; y++) {
            for (let x = 0; x < this.columns; x++) {
                let neighbors = this.calculateNumberOfNeighbors(this.board, x, y);
                if (this.board[y][x]) {
                    if (neighbors === 2 || neighbors === 3) {
                        newBoard[y][x] = true;
                    } 
                    else {
                        newBoard[y][x] = false;
                    }    
                } else {      
                    if (!this.board[y][x] && neighbors === 3) {       
                         newBoard[y][x] = true;      
                        }    
                    }  
                }
            }
        this.board = newBoard;
        this.setState({ cells: this.makeCells() });
        this.timeoutHandler = window.setTimeout(() => { 
                 this.runIteration();    
                }, this.state.interval); 
    }



    calculateNumberOfNeighbors(board, x, y) {
        let neighbors = 0;
        const dirs = [[-1, -1], [-1, 0], [-1, 1], [0, 1], [1, 1], [1, 0], [1, -1], [0, -1]];
        for (let i = 0; i < dirs.length; i++) {
            const dir = dirs[i];
            let y1 = y + dir[0];
            let x1 = x + dir[1];
            if (x1 >= 0 && x1 < this.columns && y1 >= 0 && y1 < this.rows && board[y1][x1]) {
                neighbors++;
            }
        }
        return neighbors;
    }

    render() {
        return (
            <div>
                <div className='controls' style={{ 'text-align': 'center', padding: '10px'}} onChange={this.updateInterval}>
                    Time interval in milliseconds
                    <input value={this.state.interval} style={{margin: '15px'}} onChange={this.updateInterval} />

                    { this.state.isRunning ? 
                    <button className='button' style={{color: 'red'}} onClick={this.stopGame}>STOP</button> : 
                        <button className='button' style={{color: 'green'}} onClick={this.startGame}>START</button> }
                </div>

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