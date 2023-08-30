import { $authHost, $host } from "./index";

export const loginFunc = async (login, password) => {
    const { data } = await $host.post('/login', { login: login, password: password });
    localStorage.setItem('token', data.token);
    alert("token " + data.token);
    return data;
}

export const check = async () => {
    const {data} = await $authHost.get('/login/check');
    localStorage.setItem('token', data.token);
    return data;
}