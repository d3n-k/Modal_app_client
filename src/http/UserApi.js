import { $host } from "./index";

export const loginFunc = async (login, password) => {
    const { data } = await $host.post('/login', { login: login, password: password });
    return data;
}