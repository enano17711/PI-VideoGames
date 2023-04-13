import axios from "axios";

export default axios.create({
    baseURL: "http://localhost:8080",
    // baseURL: "https://pi-videogames-mdcw.onrender.com/",
    headers: {
        "Content-type": "application/json"
    }
});