import axios from "axios";


const URL = "http://127.0.0.1:8000/"

export function place_an_order(action) {
    const data = {
        'items': action.myCart,
        'total_price': action.myTotalPrice
    }

    return new Promise((resolve) =>
        axios.post(`${URL}placeneworder/`,
         data,
         { headers: { 'Authorization': `Bearer ${action.token}` } },
         ).then((res) => resolve({ data: res.data }))
    );

}