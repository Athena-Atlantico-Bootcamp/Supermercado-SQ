import axios from "axios"

const api = axios.create({
    baseURL: "https://supermercado-athena.herokuapp.com"
})

export default api