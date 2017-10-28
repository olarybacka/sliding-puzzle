import React from 'react'
import StyledTile from './tile.style'

export default ({ size, i, position, moveTile, gameInProgress }) => (
    <StyledTile
        left={position.left}
        top={position.top}
        i={i}
        size={size}
        disabled={!gameInProgress}
        onClick={moveTile.bind(null, i)}
    >
    </StyledTile>
)