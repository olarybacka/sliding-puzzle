import React, { Component } from 'react';
import styled from 'styled-components';


const StyledTile = styled.section`
    text-align: center;
    width: ${props => props.size}px;
    height: ${props => props.size}px;
    position: absolute;
    left:  ${props => props.left}px;
    top: ${props => props.top}px;
    background: ${props => (props.id === 0) ? 'none' : 'url("./img/puzzle/1/' + props.id + '.jpg") tomato'};
    background-size: cover;
    border: 1px solid #fff;
`;

class TileComponent extends Component {
    
    clickHandler = (i) => {
        console.log(i)
    }
    onClick(SomeValue) {
        console.log(SomeValue)
    }
    left;
    top;
    render() {
        const { size, i, dimension, empty, moveTile } = this.props

        this.left = empty ? empty.left : size * (i % dimension);
        this.top = empty? empty.top : Math.floor(i / dimension) * size 
        this.id = i;
        console.log(empty)
        return (
            <StyledTile
                left={this.left}
                top={this.top}
                size={size}
                id={i}
                className="tile"
                empty={empty}
                onClick={moveTile.bind(null, i, this.left, this.top)}
            >
            </StyledTile>
        )
    }
}

export default TileComponent;

