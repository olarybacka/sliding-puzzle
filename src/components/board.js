import React from 'react'
import Tile from './Tile'


// moveTile(tileObj){
//     let $tile = document.querySelector('[data-id="' + tileObj.value + '"]');
//     let $empty = document.querySelector('.empty');

//     // style
//     let $tempLeft = $tile.style.left;
//     let $tempTop = $tile.style.top;
//     $tile.style.left = $empty.style.left;
//     $tile.style.top = $empty.style.top;
//     $empty.style.left = $tempLeft;
//     $empty.style.top = $tempTop;

//     // position
//     let tileObjTemp = Object.assign({}, tileObj);
//     tileObj.row = this.emptyObj.row;
//     tileObj.column = this.emptyObj.column;
//     this.emptyObj.row = tileObjTemp.row;
//     this.emptyObj.column = tileObjTemp.column;
// }



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