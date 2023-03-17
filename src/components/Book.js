import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

const Book = ({ bookProp }) => {
  const dispatch = useDispatch();
  return (
    <div className="book-card">
      <li>
        <div className="book-part">
          <span className="category">
            {bookProp.category}
          </span>
          <span className="title">
            {bookProp.title}
          </span>
          <span className="author">
            {bookProp.author}
          </span>
        </div>
        <div className="action">
          <button
            className="action-button"
            type="submit"
          >
            Comments
          </button>
          <button
            className="action-button"
            type="submit"
            onClick={() => {
              dispatch(removeBook(bookProp.item_id));
            }}
          >
            Remove
          </button>
          <button
            className="action-button"
            type="submit"
          >
            Edit
          </button>
        </div>
      </li>

      <div className="progress-part">
        <div className="progress-circle">
          <div className="oval-2" />
        </div>
        <div className="row-percent-complete">
          <div className="percent">
            98%
          </div>
          <div className="completed">
            Completed
          </div>
        </div>
      </div>

      <div className="chapter-part">
        <div className="current-chapter"> CURRENT CHAPTER </div>
        <div className="current-lesson"> Chapter3: ALessonLearned </div>
        <button type="button" className="update-progress"> Update Progress </button>
      </div>

    </div>
  );
};

Book.propTypes = {
  bookProp: PropTypes.shape({
    item_id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;
