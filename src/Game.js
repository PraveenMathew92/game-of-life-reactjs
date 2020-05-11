import React from 'react';
import './Game.css';

const CELL_SIZE = 200;
const WIDTH = 800;
const HEIGHT = 600;

class Game extends React.Component {
    render() {
        return (
            <div>
                <div className="Board" style={{ width: WIDTH, height: HEIGHT}} />
            </div>
        )
    }
}
export default Game;