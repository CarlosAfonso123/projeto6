import axios from "axios";

const api = axios.create({
    baseURL: "http://192.168.0.201:3000/"
})
//json-server --watch --host 192.168.0.201 db.json
export default api;