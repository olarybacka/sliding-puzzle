import Tile from '../components/tile'
import React, { Component } from 'react';



class BoardComponent extends Component {

    moveTile = (id) => {
        console.log(id)
    }
    render() {

        return (
            <div className="game-board">
                {this.props.completedPoisition.map((tile, i) =>
                    <Tile
                        key={i}
                        size={this.props.size}
                        dimension={this.props.dimension}
                        moveTile={this.moveTile}
                        i={i} />
                )}
            </div>
        )
    }
}
export default BoardComponent;
