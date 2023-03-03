import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

const Book = ({ bookProp }) => {
  const dispatch = useDispatch();
  return (
    <div className="book-card">
      <div className="book-part">
        <li>
          <div>
            <p>
              <span className="category">
                {' '}
                {bookProp.category}
              </span>
            </p>
            <p>
              <span className="title">
                {' '}
                {bookProp.title}
              </span>
            </p>
            <p>
              <span className="author">
                {' '}
                {bookProp.author}
              </span>
            </p>
            <button
              className="comments"
              type="submit"
            >
              Comments
            </button>
            <button
              className="remove"
              type="submit"
              onClick={() => {
                dispatch(removeBook(bookProp.item_id));
              }}
            >
              Remove
            </button>
            <button
              className="remove"
              type="submit"
            >
              Edit
            </button>
          </div>
        </li>
      </div>

      <div className="progress-part">
        <div className="oval-2">
          hhh
        </div>
        <div className="row-percent-complete">
          <div className="percent">
            98%
          </div>
          <div className="completed">
            complete
          </div>
        </div>
      </div>

      <div className="chapter-part">
        <div className="current-chapter"> CURRENT CHAPTER </div>
        <div className="current-lesson"> Chapter3: ALessonLearned </div>
        <div className="rectangle-2"><span className="update-progress"> Update progress </span></div>
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
