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
const getAllCodeService = (inputData) => {
    return axios.get(`/api/allcode?type=${inputData}`);

}
const getTopDoctorHomeService = (limit) => {
    return axios.get(`/api/top-doctor-home?limit=${limit}`)
}
const getAllDoctors = () => {
    return axios.get(`/api/get-all-doctors`)
}
const saveDetailDoctorService = (data) => {
    return axios.post(`/api/save-infor-doctors`, data)
}
export {
    handleLoginApi, getAllUser,
    createNewUserService, deleteUserService,
    editUserService, getAllCodeService,
    getTopDoctorHomeService, getAllDoctors,
    saveDetailDoctorService

}