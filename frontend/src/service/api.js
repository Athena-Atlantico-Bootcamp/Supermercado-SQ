import axios from "axios"

const api = axios.create({
    //baseURL: "http://localhost:3001",
    baseURL: "https://supermercado-athena.herokuapp.com",
    
})

export default api