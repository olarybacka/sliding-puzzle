import React from 'react';
import styled from 'styled-components';
import './Tile.css';


const StyledTile = styled.section`
text-align: center;
background: tomato;
width: ${props => props.size}px;
height: ${props => props.size}px;
position: absolute;
left:  ${props => props.left}px;
top: ${props => props.top}px;
border: 1px solid #fff;
`;

export default (props) => {
    console.log(props)
    const {size, i, dimension} = props
    return (
        <StyledTile 
            left = {size * (i % dimension)} 
            top = { Math.floor(i / dimension) * size}
            size={size} 
            className="tile">  
        </StyledTile>
    )
}
