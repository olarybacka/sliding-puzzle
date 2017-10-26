import React, { Component } from 'react'
import styled from 'styled-components'

const StyledTile = styled.section`
    transition: 200ms ease;
    width: ${props => props.size}px;
    height: ${props => props.size}px;
    position: absolute;
    left:  ${props => props.left}px;
    top: ${props => props.top}px;
    background: ${props => (props.id === 0) ? 'none' : 'url("./img/puzzle/1/' + props.id + '.jpg") grey'};
    background-size: cover;
    color: #fff;
    border: 1px solid #fff;
`

class TileComponent extends Component {
    state = {
        top: null,
        left: null
    }

    componentWillMount() {
        const { size, i, dimension, position } = this.props
        this.setState({
            left: position ? position.left : size * (i % dimension),
            top: position ? position.top : Math.floor(i / dimension) * size
        })
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

    render() {
        const { left, top } = this.state
        const { size, i, position, moveTile } = this.props

        return (
            <StyledTile
                left={left}
                top={top}
                size={size}
                id={i}
                position={position}
                onClick={moveTile.bind(null, i, left, top)}
            >
            </StyledTile>
        )
    }
}

export default TileComponent