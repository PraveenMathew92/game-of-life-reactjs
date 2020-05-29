import React from "react";
import Cell from "./Cell";

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.height = this.props.height;
        this.width = this.props.width;
        this.cellSize = this.props.cellSize;
        this.state = {cells: []};
    }

    getElementOffset() {
        const rect = this.elementgetBoundingClientRect();
        const doc = document.documentElement;
        return { x: (rect.left + window.pageXOffset) - doc.clientLeft, y: (rect.top + window.pageYOffset) - doc.clientTop };
    }

    handleClick = (event) => {
        const elemOffset = this.getElementOffset.bind(event.target);
        const offsetX = event.clientX - elemOffset.x;
        const offsetY = event.clientY - elemOffset.y;
        const x = Math.floor(offsetX / this.cellSize);
        const y = Math.floor(offsetY / this.cellSize);
        if (x >= 0 && x <= this.columns && y >= 0 && y <= this.rows) {
            this.board[y][x] = !this.board[y][x];
        }
        this.setState(((prevState) => { cells: prevState.cells.push({x: x, y: y}) }))
    }

    render() {
        return (<div className="Board"
        style={{ width: this.width, height: this.height, backgroundSize: `${this.cellSize}px ${this.cellSize}px`}}
        onClick={this.handleClick}
        >
        { this.state.cells.map(cell => <Cell x={cell.x} y={cell.y} />) }
        </div>)
    }
}

export default Board;