import axios from 'axios'


const URL = "http://127.0.0.1:8000/"

export function get_all_productss() {
    return new Promise((resolve) =>
        axios.get(`${URL}allproducts/`).then((res) => resolve({ data: res.data }))
    );
}