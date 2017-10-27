import Tile from '../components/tile'
import React, { Component } from 'react'
import StartButton from '../components/startButton'

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
        },
        gameInProgress: false
    }

    componentDidMount() {
        this.shuffle(3)
    }
    saveInitialState = (state) => {
        const completedPoisition = this.state.completedPoisition
        completedPoisition[state.id] = { ...state }
        this.setState({ completedPoisition })
    }

    saveCurrentState = (state) => {
        setTimeout(() => {
            const currentPosition = JSON.parse(JSON.stringify(this.state.currentPosition)) // deep copy to avoid looping in shouldComponentUpdate
            currentPosition[state.id] = { ...state }
            this.setState({ currentPosition })
        })
    }

    shouldComponentUpdate(nextProps, nextState) {
        return (nextState.currentPosition === this.state.currentPosition ? true : false)
    }

    moveTile = (tile) => {
        if (this.isNextToEmpty(tile)) {
            this.setState({
                id: tile.id,
                active: {
                    top: this.state.empty.top,
                    left: this.state.empty.left
                },
                empty: {
                    top: tile.top,
                    left: tile.left
                },
            })
        }
    }

    shuffle(n) {
        let last
        let tempo = Math.max(150, 1000 / n)

        for (let i = 0; i < n; i++) {
            // eslint-disable-next-line
            setTimeout(() => {
                let nexts = []

                this.state.currentPosition.forEach((tile) => {
                    if (tile.id !== last && this.isNextToEmpty(tile)) {
                        nexts.push(tile.id)
                    }
                })

                last = nexts[Math.floor(Math.random() * nexts.length)]
                this.moveTile(this.state.currentPosition[last])
                if (i === n - 1) {
                    this.setState({ gameInProgress: true })
                }

            }, i * tempo)
        }
    }

    isNextToEmpty(tile) {
        const { size, empty } = this.state
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
                <StartButton startGame={this.startGame} />
            </div>
        )
    }

    startGame() {
        console.log("Start")
    }
    componentDidUpdate() {
        if (this.state.gameInProgress) {
            setTimeout(() => {
                if (JSON.stringify(this.state.currentPosition) === JSON.stringify(this.state.completedPoisition)) {
                    this.setState({ gameInProgress: false })
                    console.log("wygrana")
                }
            })
        }
    }

}
export default BoardComponent


