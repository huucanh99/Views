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
const deleteUserService = (id) => {
    return axios.delete(`/api/delete-user?id=${id}`)
}
const editUserService = (user) => {
    return axios.put(`/api/edit-user`, user)
}
export { handleLoginApi, getAllUser, createNewUserService, deleteUserService, editUserService }