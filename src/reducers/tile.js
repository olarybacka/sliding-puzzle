const initState = {
    
    completedPoisition: [
        {"row":0, "column":0, "value":0},
        {"row":0, "column":1, "value":1},
        {"row":0, "column":2, "value":2},
    
        {"row":1, "column":0, "value":3},
        {"row":1, "column":1, "value":4},
        {"row":1, "column":2, "value":5},
    
        {"row":2, "column":0, "value":6},
        {"row":2, "column":1, "value":7},
        {"row":2, "column":2, "value":8}
    ],

    tilePositions: [
        { "row": 0, "column": 0, "value": 0 },
        { "row": 0, "column": 1, "value": 1 },
        { "row": 0, "column": 2, "value": 2 },

        { "row": 1, "column": 0, "value": 3 },
        { "row": 1, "column": 1, "value": 4 },
        { "row": 1, "column": 2, "value": 5 },

        { "row": 2, "column": 0, "value": 6 },
        { "row": 2, "column": 1, "value": 7 },
        { "row": 2, "column": 2, "value": 8 }
    ],

    size: (
        window.innerWidth > 1500 ? 160 :
        window.innerWidth > 1020 ? 140 :
        window.innerWidth > 500 ? 130 :
        100
    ),
    dimension:3  // 3x3
}
export default (state = initState, action) => {
    switch(action.type) {
        case 'MOVE':
            return {...state}
            break
        default:
            return state
    }
}