import PropTypes from 'prop-types';
import Book from './Book';

const Books = ({ books }) => (
  <ul>
    {books.map((book) => (
      <Book key={book.id} bookProp={book} />
    ))}
  </ul>
);

Books.propTypes = {
  books: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  })).isRequired,
};
export default Books;
