import { decrementType, incrementType, resetType } from "./actionTypes";

// const iniitialState = {
//     cartItems : []
// }

export const reducerFunc = (prevState, args) => {
    switch (args) {
        case incrementType:
            prevState = prevState + 1
            return prevState;
        case decrementType:
            prevState = prevState - 1
            return prevState;
        case resetType:
            prevState = 0
            return prevState;
        default:
            return prevState
    }
}
