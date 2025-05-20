import { decrementType, incrementType, resetType } from "./actionTypes"

export const handleincre = (dispatch) => {
    dispatch(incrementType)
}
export const handledecre = (dispatch) => {
    dispatch(decrementType)
}
export const handlereset = (dispatch) => {
    dispatch(resetType)
}