import axios from "axios";

const api = axios.create({
    baseURL: "http://177.202.32.139:8080/api/mobile"
})

export default api;