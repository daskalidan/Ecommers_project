import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { categoriesSelector, categorySelector, chooseCategory } from '../features/shop/productsSlice';



const Categories = () => {
    const dispatch = useDispatch();

    const categoriesAr = useSelector(categoriesSelector);
    const active_cat = useSelector(categorySelector);

  return (
    <div>
    <h3>categories</h3><hr/>
    <h4>active cat</h4>
    <h5>{active_cat.cat_name? active_cat.cat_name: active_cat}</h5><hr/>
    <button onClick={() => dispatch(chooseCategory('all'))}>all</button>
    {categoriesAr.map((cat) => (
      <button key={cat.id} onClick={() => dispatch(chooseCategory(cat))}>{cat.cat_name}</button>

    ))}
    </div>

  )
}

export default Categories