import PropTypes from 'prop-types';
import Book from './Book';

const Books = ({ books }) => (
  <ul>
    {books.map((book) => (
      <Book key={book.item_id} bookProp={book} />
    ))}
  </ul>
);

Books.propTypes = {
  books: PropTypes.arrayOf(PropTypes.shape({
    item_id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  })).isRequired,
};
export default Books;
