import Tile from '../components/tile'
import React, { Component } from 'react'

class BoardComponent extends Component {

    state = {
        id: null,
        completedPoisition: [],
        currentPosition: [],
        size: (
            window.innerWidth > 1500 ? 160 :
                window.innerWidth > 1020 ? 140 :
                    window.innerWidth > 500 ? 130 :
                        100
        ),
        dimension: 3, // n x n tiles
        empty: {
            top: 0,
            left: 0
        },
        active: {
            top: 0,
            left: 0
        }
    }

    saveInitialState = (state) => {
        const completedPoisition = this.state.completedPoisition;
        completedPoisition[state.id] = { ...state }
        this.setState({ completedPoisition })
    }

    saveCurrentState = (state) => {
        setTimeout(() => {
            const currentPosition = JSON.parse(JSON.stringify(this.state.currentPosition)); // deep copy to avoid looping in shouldComponentUpdate
            currentPosition[state.id] = { ...state }
            this.setState({ currentPosition })
        })
    }

    shouldComponentUpdate(nextProps, nextState) {
        return (nextState.currentPosition === this.state.currentPosition ? true : false)
    }

    moveTile = (id, left, top) => {
        if (this.isNextToEmpty({ id, left, top })) {
            this.setState({
                id: id,
                active: {
                    top: this.state.empty.top,
                    left: this.state.empty.left
                },
                empty: {
                    top: top,
                    left: left
                },
            })
        }
    }

    isNextToEmpty(tile) {
        const { size, empty } = this.state;
        const distance = (Math.abs(tile.left - empty.left) + Math.abs(tile.top - empty.top))
        return distance === size
    }

    render() {
        const { size, dimension, id, active, empty } = this.state
        return (
            <div className="game-board">
                {Array.from({ length: this.state.dimension * this.state.dimension }).map((tile, i) =>
                    <Tile
                        key={i}
                        {...{ size, dimension, i }}
                        moveTile={this.moveTile}
                        saveInitialState={this.saveInitialState}
                        saveCurrentState={this.saveCurrentState}
                        position={i === id ? active : i === 0 ? empty : false}
                    />
                )}
            </div>
        )
    }

}
export default BoardComponent
