import axios from "axios";

const api = axios.create ({
     baseURL: "http://localhost:3000/"
    //baseURL: "http://169.57.150.59:3010/"
});

export default api;