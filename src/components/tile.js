import React, { Component } from 'react';
import styled from 'styled-components';


const StyledTile = styled.section`
text-align: center;
width: ${props => props.size}px;
height: ${props => props.size}px;
position: absolute;
left:  ${props => props.left}px;
top: ${props => props.top}px;
background: ${props => (props.id == 0) ? 'none' : 'url("public/img/puzzle/1/' + props.id + '.jpg") tomato'};
border: 1px solid #fff;
`;
// if (i === 0) { item.className += " empty" }
// else { item.style.backgroundImage = `url("img/puzzle/${this.folder}/${i}.jpg")` };
class TileComponent extends Component {
    render() {
        const {size, i, dimension} = this.props
        this.id = i;
        return (
            <StyledTile
                left={size * (i % dimension)}
                top={Math.floor(i / dimension) * size}
                size={size}
                id={i}
                className="tile">
            </StyledTile>
        )
    }
}

export default TileComponent;

