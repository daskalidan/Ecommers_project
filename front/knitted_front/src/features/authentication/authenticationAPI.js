import axios from 'axios'

const URL = "http://127.0.0.1:8000/"

export function signin(action) {

    return axios.post(`${URL}token/`, { username: action.username, password: action.password })
    .then((res) => (res.data))
}

export function signup(action) {
    console.log(action)
    return axios.post(`${URL}register/`, action)
        .then((res) => (res.data))
}

export function log_out(action) {
    console.log(action)
    return new Promise((resolve) =>
        axios.get(`${URL}logout/`,
         { headers: { 'Authorization': `Bearer ${action.token}` } },
         ).then((res) => resolve({ data: res.data }))
    );

}