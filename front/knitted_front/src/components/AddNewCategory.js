import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { selectToken } from '../features/authentication/authenticationSlice';
import { addNewCategoryAsync } from '../features/shop/productsSlice';


const AddNewCategory = () => {
    const dispatch = useDispatch();

    const [newCat, setnewCat] = useState('')
    const token = useSelector(selectToken);


    return (
        <div className='add-product'>
            <h3>add new category</h3>
            <input type='text' value={newCat} placeholder='category name' onChange={(e) => setnewCat(e.target.value)}></input>{' '}

            <button onClick={() => dispatch(addNewCategoryAsync(
                {
                    'category': newCat,
                    'token': token
                }
            ))}>add category</button>
        </div>
    )
}

export default AddNewCategory