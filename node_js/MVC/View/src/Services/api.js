import { loginUrl, registerUrl } from "./constants"

export const postLoginApi = async (formData) => {
    const options = {
        method: "POST",
        body: JSON.stringify(formData)
    }
    const response = await fetch(loginUrl, options);
    const data = response.json();
    return data;
}

export const postRegisterApi = async (formData) => {
    const options = {
        method: "POST",
        body: JSON.stringify(formData)
    }
    const response = await fetch(registerUrl, options);
    const data = response.json();
    return data
}