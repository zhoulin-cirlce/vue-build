import axios from 'axios';

let base = '/v2';

export const requestLogin = params => { return axios.post(`${base}/login`, params).then(res => res.data); };
export const requestProxy = params => {
    return axios.get(`${base}/movie/in_theaters`, params).then(res => res);
};


export const getUserList = params => { return axios.get(`${base}/user/list`, { params: params }); };

//TaskList数据来源

export const getTaskList = params => {return axios.post(`${base}/task/list`,{params : params});}

export const getCardList = params => {return axios.post(`${base}/card/list`,{params : params});}

export const getUserListPage = params => { return axios.get(`${base}/user/listpage`, { params: params }); };

export const removeUser = params => { return axios.get(`${base}/user/remove`, { params: params }); };

export const batchRemoveUser = params => { return axios.get(`${base}/user/batchremove`, { params: params }); };

export const editUser = params => { return axios.get(`${base}/user/edit`, { params: params }); };

export const addUser = params => { return axios.get(`${base}/user/add`, { params: params }); };