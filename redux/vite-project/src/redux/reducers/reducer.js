const initialState = {
    count : 0
}


export const reducer = (state = initialState, action) => {
    switch(action.type){ //boolean -> value -> incre | decre | reset
        case "increment" : 
            state.count = state.count + 1;
            return state;
        case "decrement" : 
            state.count = state.count - 1;
            return state;
        case "reset" : 
            state.count = 0;
            return state;
        default : 
            return state;
    }
}
