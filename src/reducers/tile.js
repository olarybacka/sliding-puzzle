import { completedPoisition } from '../config';

const initState = {
    tilePositions: completedPoisition
}
export default (state = initState, action) => {
    switch(action.type) {
        case 'MOVE':
            return {...state}
        default:
            return state
    }
}