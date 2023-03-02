import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Layout from './Layout';
import BookPage from '../routes/BookPage';
import Categories from '../routes/Categories';
import NotMatch from '../routes/NotMatch';
import { getBookItems } from '../redux/books/booksSlice';

const Main = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBookItems());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<BookPage />} />
        <Route path="categories" element={<Categories />} />
        <Route path="*" element={<NotMatch />} />
      </Route>
    </Routes>
  );
};
export default Main;
