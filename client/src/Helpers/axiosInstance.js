import axios from 'axios';

// const BASE_URL = 'http://localhost:3000/';

export const axiosInstance = axios.create({
    baseURL: "http://localhost:3000",  
    withCredentials: true
})