import axios from 'axios'


const URL = "http://127.0.0.1:8000/"

export function get_all_products() {
    return new Promise((resolve) =>
        axios.get(`${URL}allproducts/`).then((res) => resolve({ data: res.data }))
    );
}

export function get_all_categories() {
    return new Promise((resolve) =>
        axios.get(`${URL}allcategories/`).then((res) => resolve({ data: res.data }))
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

export function add_new_category(action) {
    console.log(action)
    const data = {
        'cat_name': action.category
    }

    return new Promise((resolve) =>
        axios.post(`${URL}createnewcategory/`,
         data,
         { headers: { 'Authorization': `Bearer ${action.token}` } },
         ).then((res) => resolve({ data: res.data }))
    );

}

export function delete_product(action) {
    return new Promise((resolve) =>
        axios.delete(`${URL}deleteproduct/`,
            {
                headers: { 'Authorization': `Bearer ${action.token}` },
                data: action.item
            }
        ).then((res) => resolve({ data: res.data }))
    );
}