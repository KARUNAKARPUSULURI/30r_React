import axios from "axios";
import { getProductsAPI, getStudentsApi, registerPostAPI } from "./constants"

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

export const postStudentsApiData = async(payload) => {
    const response = await axios.post(getStudentsApi, payload);
    console.log(response)
}

export const getStudentsApiData = async() => {
    const response = await axios.get(getStudentsApi)
    return response.data
}
export const deleteStudentsApiData = async(id) => {
    const response = await axios.delete(`${getStudentsApi}/${id}`)
    return response.data
}

