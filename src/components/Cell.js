import React from "react";
import {CELL_SIZE} from '../constants';

class Cell extends React.Component {
    render() {
        const {x, y} = this.props;
        const cellTop = CELL_SIZE * y + 1;
        const cellLeft = CELL_SIZE * x + 1;
        const cellWidth = CELL_SIZE - 1;
        const cellHeight = CELL_SIZE - 1;

        return (
            <div className="Cell" 
            style={{ left: `${cellLeft}px`, top:`${cellTop}px`, width:`${cellWidth}px`, height: `${cellHeight}px`}} 
            />
        )
    }
}

export default Cell;