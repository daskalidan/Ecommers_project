import axios from 'axios'


const URL = "http://127.0.0.1:8000/"

export function get_all_products() {
    return new Promise((resolve) =>
        axios.get(`${URL}allproducts/`).then((res) => resolve({ data: res.data }))
    );
}

export function add_new_product(action) {
    console.log(action)
    const data = {
        'name': action.name,
        'category': action.category,
        'price': action.price,
        'description': action.description,
        'image': action.imag,
    }

    return new Promise((resolve) =>
        axios.post(`${URL}createnewproduct/`,
         data,
         { headers: { 'Authorization': `Bearer ${action.token}`, 'Content-Type': 'multipart/form-data'} },
         ).then((res) => resolve({ data: res.data }))
    );

}