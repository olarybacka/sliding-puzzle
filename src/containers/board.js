import Tile from '../components/tile'
import React, { Component } from 'react'
import StartButton from '../components/startButton'

class BoardContainer extends Component {

    state = {
        id: null,
        completedPoisition: [],
        currentPosition: [],
        size: 160,
        dimension: 3, // n x n tiles
        gameInProgress: false,
        shuffleMoves: 23
    }

    constructor() {
        super()
        const { dimension, size } = this.state
        const currentPosition = Array.from({ length: dimension ** 2 })
            .map((t, i) => ({
                left: size * (i % dimension),
                top: Math.floor(i / dimension) * size
            }))

        const completedPoisition = [...currentPosition]

        this.state = {
            ...this.state,
            currentPosition,
            completedPoisition
        };
    }

    tileClicked = (i) => {
        if (this.isNextToEmpty(this.state.currentPosition[i])) {
            this.moveTile(i)
        }
    }

    moveTile(i) {
        const currentPosition = [...this.state.currentPosition]
        currentPosition[i] = currentPosition[0]
        currentPosition[0] = this.state.currentPosition[i]
        this.setState({ currentPosition })
    }

    shuffle = async () => {
        let last
        let speed = 800 / this.state.shuffleMoves
        for (let i = 0; i < this.state.shuffleMoves; i++) {
            // eslint-disable-next-line
            await new Promise((resolve) => {
                setTimeout(() => {
                    let candidates = this.state.currentPosition
                        .map((tile, i) => (i !== last && this.isNextToEmpty(tile)) ? i : null)
                        .filter((tile) => tile)

                    last = candidates[Math.floor(Math.random() * candidates.length)]
                    this.moveTile(last)
                    resolve()
                }, speed)
            })
        }
    }

    isNextToEmpty(tile) {
        const empty = this.state.currentPosition[0]
        const { size } = this.state
        const distance = (Math.abs(tile.left - empty.left) + Math.abs(tile.top - empty.top))
        return distance === size
    }

    startGame = () => {
        this.shuffle().then(() => this.setState({ gameInProgress: true }))
    }

    render() {
        const { size, dimension } = this.state
        return (
            <div className="game-board">
                {Array.from({ length: this.state.dimension ** 2 }).map((tile, i) =>
                    <Tile
                        key={i}
                        {...{ size, dimension, i }}
                        moveTile={this.tileClicked}
                        gameInProgress={this.state.gameInProgress}
                        position={this.state.currentPosition[i]}
                    />
                )}
                {<StartButton
                    gameInProgress={this.state.gameInProgress}
                    startGame={this.startGame}
                />}
            </div>
        )
    }

    componentDidUpdate() {
        if (this.state.gameInProgress) {
            if (JSON.stringify(this.state.currentPosition) === JSON.stringify(this.state.completedPoisition)) {
                this.setState({ gameInProgress: false })
                setTimeout(() => alert("you won"), 300)
            }
        }
    }
}

export default BoardContainer