import { useSelector } from 'react-redux';
import Books from '../components/Books';
import Input from '../components/Input';

const BookPage = () => {
  const { bookItems, isLoading } = useSelector((state) => state.book);
  const bookArray = JSON.parse(JSON.stringify(bookItems));

  if (isLoading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    bookArray.length === 0 ? (
      <>
        <section className="book">
          <header>
            <h4 className="empty-book">The book list is currently empty</h4>
          </header>
        </section>
        <Input />
      </>
    ) : (
      <section>
        <Books books={bookArray} />
        <Input />
      </section>
    )
  );
};

export default BookPage;
