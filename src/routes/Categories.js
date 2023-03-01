import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categoriesSlice';

const Categories = () => {
  const { categories } = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  return (
    <div className="category-main">
      { !Array.isArray(categories) && <center><div>{categories}</div></center> }
      <button className="category-button" type="button" onClick={() => dispatch(checkStatus('Under construction'))}>Check Status</button>
    </div>
  );
};
export default Categories;
