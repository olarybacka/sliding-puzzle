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

    componentWillUpdate() {
        const { size, i, dimension, empty } = this.props
        console.log(this.props)
        this.setState({
            left: empty ? empty.left : size * (i % dimension)
        });
        this.setState({
            top: empty ? empty.top : Math.floor(i / dimension) * size
        })
    }

    render() {
        const { size, i, dimension, empty, text, moveTile } = this.props
        this.id = i;
        return (
            <StyledTile
                left={this.state.left}
                top={this.state.top}
                size={size}
                id={i}
                className="tile"
                empty={empty}
                onClick={moveTile.bind(null, i, this.left, this.top)}
            >
                {JSON.stringify(text)}
            </StyledTile>
        )
    }
}

export default TileComponent;

