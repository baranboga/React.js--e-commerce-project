

import axios from "axios";
import { apiUrl } from "./apiConfig";

let options={
    method: '',
    url: apiUrl,
    headers: {
        Authorization: '',
        contentType: ''
    },
    data: {}
}




export const getProducts =(token)=>{
    options.headers.Authorization = `Bearer ${token}`;
    options.method = 'GET';
    options.url = `${apiUrl}/Product`;

    const promise = axios.request(options);
    const dataPromise = promise.then((response)=>response.data);
    return dataPromise;
}

export const getProductById =(token,id)=>{
    options.headers.Authorization = `Bearer ${token}`;
    options.method = 'GET';
    options.url = `${apiUrl}/Product/${id}`;

    const promise = axios.request(options);
    const dataPromise = promise.then((response)=>response.data);
    return dataPromise;
        

}