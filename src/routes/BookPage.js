import { useSelector } from 'react-redux';
import Books from '../components/Books';
import Input from '../components/Input';

const BookPage = () => {
  const { bookItems, isLoading } = useSelector((state) => state.book);
  console.log(`*****: ${JSON.stringify(bookItems)}`);

  return (
    <section>
      <Books books={JSON.stringify(bookItems)} />
      <Input />
    </section>
  );
};

export default BookPage;
