import React from "react";
import {CELL_SIZE, HEIGHT, WIDTH} from '../constants';

class Board extends React.Component {
    constructor() {
        super();
        this.rows = HEIGHT/CELL_SIZE;
        this.columns = WIDTH/CELL_SIZE;
        this.state = {cells: []};
    }

    render() {
        return (<div className="Board"/>)
    }
}

export default Board;