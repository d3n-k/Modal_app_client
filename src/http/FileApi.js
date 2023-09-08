import { $authHost, $host } from "./index";

export const uploadFiles = async (files) => {
    const { data } = await $authHost.post('/files', files);
    return data;
}

export const deleteFile = async (filename) => {
    const { data } = await $authHost.delete('/files/' + filename);
    return data;
}

export const getFiles = async () => {
    const { data } = await $host.get('/files');
    return data;
}