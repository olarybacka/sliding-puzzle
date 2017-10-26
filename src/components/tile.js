import React, { Component } from 'react';
import styled from 'styled-components';


const StyledTile = styled.section`
    text-align: center;
    width: ${props => props.size}px;
    height: ${props => props.size}px;
    position: absolute;
    left:  ${props => props.left}px;
    top: ${props => props.top}px;
    background: ${props => (props.id === 0) ? 'pink' : 'url("./img/puzzle/1/' + props.id + '.jpg") tomato'};
    background-size: cover;
    color: #fff;
    border: 1px solid #fff;
`;

class TileComponent extends Component {
    state = {
        top: null,
        left: null
    }


    left;
    top;
    componentWillMount() {
        const { size, i, dimension, position } = this.props
        this.setState({
            left: position ? position.left : size * (i % dimension),
            top: position ? position.top : Math.floor(i / dimension) * size
        })

    }
    componentWillReceiveProps() {
        const { size, i, dimension, position } = this.props
        if (position) {
            console.log(position, i)
            this.setState({
                left: position.left,
                top: position.top
            })
        }
        return true;
    }

    render() {
        console.log("render")
        const { size, i, position, text, dimension, moveTile } = this.props

        return (
            <StyledTile
                left={this.state.left}
                top={this.state.top}
                size={size}
                id={i}
                className="tile"
                position={position}
                onClick={moveTile.bind(null, i, this.state.left, this.state.top)}
            >
                {JSON.stringify(text)}
            </StyledTile>
        )
    }
}

export default TileComponent;

