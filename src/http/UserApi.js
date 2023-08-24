import { $host } from "./index";

export const loginFunc = async (login, password) => {
    alert("login " + login + " " + password);
    const { data } = await $host.post('user/login', { login: login, password: password });
    return data;
}