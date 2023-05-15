
import axios from "axios";
import { apiUrl } from "./apiConfig";





export const submitHandle = (e,userName,password) => {
    e.preventDefault();
    console.log(userName);

    const promise = axios.get(`${apiUrl}/Auth?userName=${userName}&password=${password}`);
    console.log(promise);
    const dataPromise = promise.then((response) => response.data);
    return dataPromise;
}

export const checkToken = (token)=>{
    const promise= axios.get(`${apiUrl}/Auth/ValidateToken?token=${token}`);
    const dataPromise= promise.then((response)=>response.data);
    return dataPromise;
}