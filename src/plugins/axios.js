import axios from "axios";

const api = axios.create({
    baseURL: "https://back-end-rkk9.onrender.com",
    headers: {
        "Content-Type": "application/json",
    },
    timeout: 100000,
});

export default api;