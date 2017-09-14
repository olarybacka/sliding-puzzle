import {tilePositions, completedPoisition, size} from '../config';

export default class App {
    constructor(){
        this.resultBoard = [];
    }

    bootstrap(){
        document.querySelector('.btn-start')
            .addEventListener('click', () => this.startGame())
    }

    startGame(){
        document.querySelector('.btn-start').classList.add('hide__start__button');
    }
    
}
