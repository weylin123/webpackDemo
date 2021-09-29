import axios from "axios";
import { BASE_URL } from "./config";

const request= axios.create({
  headers: {
    'Content-Type': 'application/json'
},
  baseURL:BASE_URL,
  timeout:5000,
})

export default request