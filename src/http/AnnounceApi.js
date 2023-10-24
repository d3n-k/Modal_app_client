import { $authHost, $host } from "./index";

export const saveAnnounce = async (index, announce) => {
    const { data } = await $authHost.post('/announce/' + index, { data: announce });
    return data;
}

export const getAnnounce = async (index) => {
    const { data } = await $host.get('/announce/' + index);
    return data;
}