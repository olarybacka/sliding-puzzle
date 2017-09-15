import React from 'react'
import Tile from './Tile'


export default (props) => (
    <div className="game-board">
        {props.completedPoisition.map((tile, i) => <Tile key={i} {...props} i={i}  />)}
    </div>
)