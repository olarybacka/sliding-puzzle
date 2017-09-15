import React from 'react'
import Tile from './Tile'


export default (props) => (
    <div className="game-board">
        {props.tilePositions.map((tile, i) =>
            <Tile 
                key={i} 
                size={props.size}  
                dimension={props.dimension}  
                i={i} />
        )}
    </div>
)