import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import BookPage from '../routes/BookPage';
import Categories from '../routes/Categories';
import NotMatch from '../routes/NotMatch';

const Main = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<BookPage />} />
      <Route path="categories" element={<Categories />} />
      <Route path="*" element={<NotMatch />} />
    </Route>
  </Routes>
);
export default Main;
