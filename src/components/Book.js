import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

const Book = ({ bookProp }) => {
  const dispatch = useDispatch();
  return (
    <li>
      <div>
        <h2>{bookProp.title}</h2>
        <p>
          <b>AUTHOR: </b>
          {' '}
          {bookProp.author}
        </p>
        <p>
          <b>CATEGORY: </b>
          {' '}
          {bookProp.category}
        </p>
        <button
          type="submit"
          onClick={() => {
            dispatch(removeBook(bookProp.id));
          }}
        >
          remove
        </button>
      </div>
    </li>
  );
};

Book.propTypes = {
  bookProp: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;
