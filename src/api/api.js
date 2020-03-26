import * as axios from "axios";


const instance = axios.create ({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: { "API-KEY": "0cd59859-5114-47ad-865b-7f95fada4351"} //API ключ
})

export const getUsers = (currentPage = 1, pageSize=10) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
}
