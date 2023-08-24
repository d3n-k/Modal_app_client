import axios from "axios";

const $host = axios.create({
    baseURL: process.env.REACT_APP_HOST
})

export {
    $host
}