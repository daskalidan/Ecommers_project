import axios from 'axios'

const URL = "http://127.0.0.1:8000/"
// async(2)
export function signin(action) {
    return new Promise((resolve) =>
        axios.post(`${URL}token/`, { username: action.username, password: action.password }).then((res) => resolve({ data: res.data }))
    );
}

export function signup(action) {
    console.log(action)
    // const data = action
    // console.log(data)
    return new Promise((resolve) =>
        axios.post(`${URL}register/`, action)
        .then((res) => resolve({ data: res.data }))
    );
}

export function log_out(action) {
    console.log(action)
    return new Promise((resolve) =>
        axios.get(`${URL}logout/`,
         { headers: { 'Authorization': `Bearer ${action.token}` } },
         ).then((res) => resolve({ data: res.data }))
    );

}