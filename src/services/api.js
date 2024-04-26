import axios from "axios";

export const api = axios.create({
    baseURL: "https://rocketnotes-backend-tye0.onrender.com", //server address
});
