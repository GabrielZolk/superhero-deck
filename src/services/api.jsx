import axios from "axios";

const api = axios.create({
    baseURL: "https://superheroapi.com/api.php/724781019657208",
});

export default api;