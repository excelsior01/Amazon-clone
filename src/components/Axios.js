import axios from "axios";

const instance  = axios.create({
    baseURL: "http://localhost:5001/ecommerce1-2c2f3/us-central1/api" // API (cloud function) URL
})

export default instance;