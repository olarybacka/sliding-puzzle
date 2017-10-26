import Tile from '../components/tile'
import React, { Component } from 'react';



class BoardComponent extends Component {

    state = {
        id: null,
        completedPoisition: [
            { "row": 0, "column": 0, "value": 0 },
            { "row": 0, "column": 1, "value": 1 },
            { "row": 0, "column": 2, "value": 2 },

            { "row": 1, "column": 0, "value": 3 },
            { "row": 1, "column": 1, "value": 4 },
            { "row": 1, "column": 2, "value": 5 },

            { "row": 2, "column": 0, "value": 6 },
            { "row": 2, "column": 1, "value": 7 },
            { "row": 2, "column": 2, "value": 8 }
        ],

        size: (
            window.innerWidth > 1500 ? 160 :
                window.innerWidth > 1020 ? 140 :
                    window.innerWidth > 500 ? 130 :
                        100
        ),
        margin: 0,
        dimension: 3, // 3x3 tiles
        empty: {
            top: 0,
            left: 0
        },
        active: {
            top: 0,
            left: 0
        }
    };
    moveTile = (id, left, top) => {
        this.setState({
            id: id,
            empty: {
                top: this.state.active.top,
                left: this.state.active.left
            },
            active: {
                top: top,
                left: left
            },
        })
    }

    componentDidUpdate() {
        console.log(this.state.id)
    }

    render() {
        console.log(this.state.id)
        
        return (
            <div className="game-board">
                {this.state.completedPoisition.map((tile, i) =>

                    <Tile
                        key={i}
                        size={this.state.size}
                        dimension={this.state.dimension}
                        moveTile={this.moveTile}
                        empty={i === this.state.id ? this.state.empty : i === 0 ? this.state.active : false}
                        text={i === this.state.id}
                        i={i} />
                )}
            </div>
        )
    }
}
export default BoardComponent;
