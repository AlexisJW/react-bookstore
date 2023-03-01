import { useSelector } from 'react-redux';
import Books from '../components/Books';
import Input from '../components/Input';

const BookPage = () => {
  const { bookItems, isLoading } = useSelector((state) => state.book);
  const bookArray = JSON.parse(JSON.stringify(bookItems));
  return (
    <section>
      <Books books={bookArray} />
      <Input />
    </section>
  );
};

export default BookPage;
