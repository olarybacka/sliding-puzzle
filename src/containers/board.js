import Tile from '../components/tile'
import React, { Component } from 'react'
import StartButton from '../components/startButton'

class BoardComponent extends Component {

    state = {
        id: null,
        completedPoisition: [],
        currentPosition: [],
        size: 160,
        dimension: 3, // n x n tiles
        gameInProgress: false,
        shuffleMoves: 2
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

    moveTile = (i) => {
        if (this.isNextToEmpty(this.state.currentPosition[i])) {
            const currentPosition = [...this.state.currentPosition]
            currentPosition[i] = currentPosition[0]
            currentPosition[0] = this.state.currentPosition[i]
            this.setState({ currentPosition })
        }
    }

    shuffle = (n) => {
        let last
        let tempo = Math.max(80, 900 / n)
        for (let i = 0; i < n; i++) {
            // eslint-disable-next-line
            setTimeout(() => {
                let nexts = []

                this.state.currentPosition.forEach((tile, i) => {
                    if (i !== last && this.isNextToEmpty(tile)) {
                        nexts.push(i)
                    }
                })

                last = nexts[Math.floor(Math.random() * nexts.length)]
                this.moveTile(last)
                if (i === n - 1) {
                    this.setState({ gameInProgress: true })
                }
            }, i * tempo)
        }
        console.log("PO")
    }

    isNextToEmpty(tile) {
        const empty = this.state.currentPosition[0]
        const { size } = this.state
        const distance = (Math.abs(tile.left - empty.left) + Math.abs(tile.top - empty.top))
        return distance === size
    }

    startGame = () => {
        this.shuffle(this.state.shuffleMoves)
    }

    render() {
        const { size, dimension } = this.state
        return (
            <div className="game-board">
                {Array.from({ length: this.state.dimension ** 2 }).map((tile, i) =>
                    <Tile
                        key={i}
                        {...{ size, dimension, i }}
                        moveTile={this.moveTile}
                        gameInProgress={true}
                        position={this.state.currentPosition[i]}
                        i={i}
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
                console.log("you won")
            }
        }
    }
}

export default BoardComponent