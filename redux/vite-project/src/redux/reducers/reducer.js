const initialState = {
    count : 0,
}


export const reducer = (state = initialState, action) => {
    switch(action.type){ //boolean -> value -> incre | decre | reset
        case "increment" : 
            return {...state, count : state.count + 1, name : "karunakar"};
        case "decrement" : 
            return {...state, count : state.count - 1};
        case "reset" : 
            return {count : 0};
        default : 
            return state;
    }
}
