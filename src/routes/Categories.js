import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categoriesSlice';

const Categories = () => {
  const { categories } = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  return (
    <div className="category-main">
      { !Array.isArray(categories) && <center><h1>{categories}</h1></center> }
      <center><button className="status-btn" type="button" onClick={() => dispatch(checkStatus('Under construction'))}>Check Status</button></center>
    </div>
  );
};
export default Categories;
