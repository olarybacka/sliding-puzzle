import React, { Component } from 'react'
import StyledTile from './tile.style'

class TileComponent extends Component {
    state = {
        id: null,
        top: null,
        left: null
    }

    componentWillMount() {
        const { size, i, dimension, position } = this.props
        this.setState({
            id: i,
            left: position ? position.left : size * (i % dimension),
            top: position ? position.top : Math.floor(i / dimension) * size
        })
    }

    componentDidMount(){
        this.props.saveInitialState(this.state)
        this.props.saveCurrentState(this.state)
        
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.position) {
            this.setState({
                left: nextProps.position.left,
                top: nextProps.position.top
            })
        }
        return true
    }

    componentDidUpdate() {
        this.props.saveCurrentState(this.state)
    }


    render() {
        const { left, top } = this.state
        const { size, i, position, moveTile, gameInProgress } = this.props

        return (
            <StyledTile
                left={left}
                top={top}
                size={size}
                id={i}
                disabled={!gameInProgress}
                position={position}
                onClick={moveTile.bind(null, this.state)}
            >
            </StyledTile>
        )
    }
}

export default TileComponent