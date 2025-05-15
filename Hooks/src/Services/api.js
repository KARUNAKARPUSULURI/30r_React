import { getProductsAPI, registerPostAPI } from "./constants"

export const postRegisterData = async(payload) => {
    const response = await fetch(registerPostAPI, payload);
    const data = response.json();
    console.log(data)
}

export const loginApiData = async(payload) => {
    const response = await fetch(`${registerPostAPI}?email=${payload.email}&password=${payload.password}`)
    const data = response.json()
    return data
}

export const getProductsApiData = async() => {
    const response = await fetch(getProductsAPI)
    const data = await response.json()
    return data
}