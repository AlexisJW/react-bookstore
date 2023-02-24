import PropTypes from 'prop-types';

const Book = ({ bookProp }) => (
  <li>
    <div>
      <h2>{bookProp.title}</h2>
      <p>{bookProp.author}</p>
      <button type="submit">remove</button>
    </div>
  </li>
);

Book.propTypes = {
  bookProp: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;
