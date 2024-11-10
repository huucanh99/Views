import axios from '../axios';

const handleLoginApi = (email, password) => {
    return axios.post('/api/login', { email, password });
}
const getAllUser = (userId) => {
    return axios.get(`/api/get-all-users?id=${userId}`);
}
const createNewUserService = (data) => {
    console.log('check data from service:', data);
    return axios.post(`/api/create-new-user`, data);
}
export { handleLoginApi, getAllUser, createNewUserService }