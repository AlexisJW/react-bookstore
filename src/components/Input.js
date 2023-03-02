import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { addBook } from '../redux/books/booksSlice';

const Input = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();

  const handleChange = (e) => {
    switch (e.target.className) {
      case 'input-book':
        setTitle(e.target.value);
        break;
      case 'input-author':
        setAuthor(e.target.value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      item_id: uuid(),
      title,
      author,
      category: 'category',
      progress: '1%',
    };

    dispatch(addBook(data));
    setTitle('');
    setAuthor('');
  };

  return (
    <form method="post" onSubmit={handleSubmit}>
      <input className="input-book" type="text" placeholder="Add Book" onChange={handleChange} value={title} required />
      <input className="input-author" type="text" placeholder="Author" onChange={handleChange} value={author} required />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Input;
