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
        margin: 0,
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
        this.setState(prevState => ({
            completedPoisition
        }))
    }

    saveCurrentState = async (state) => {
        setTimeout(() => {
            const currentPosition = JSON.parse(JSON.stringify(this.state.currentPosition));
            currentPosition[state.id] = { ...state }
            this.setState(prevState => ({
                currentPosition
            }))
        })
    }

    shouldComponentUpdate(nextProps, nextState) {
        return (nextState.currentPosition === this.state.currentPosition ? true : false)
    }
    isNextToEmpty(tileObj) {
        return Math.abs(tileObj.row - this.emptyObj.row) + Math.abs(tileObj.column - this.emptyObj.column) === 1;
    }
    moveTile = (id, left, top) => {
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
