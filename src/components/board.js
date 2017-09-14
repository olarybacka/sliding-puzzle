
import Tile from './tile'
import { completedPoisition, finished, size } from '../config'

class Board extends window.HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: 'open' });
    }
    
    connectedCallback() {
        this.items = [];


        completedPoisition.forEach((tile, i) => {
            this.items.push(Tile(i))
        });

        this.shadow.innerHTML = this.items

    }
}
export default Board
