import { v4 as uuidv4 } from 'uuid';
import Books from '../components/Books';
import Input from '../components/Input';

const BookPage = () => {
  const books = [
    {
      id: uuidv4(),
      title: 'The 100',
      author: 'Alexis Walner',
    },
    {
      id: uuidv4(),
      title: 'Introduction to Algorithms',
      author: 'Thomas H. Corme',
    },
    {
      id: uuidv4(),
      title: 'Computer Networks',
      author: 'Andrew S. Tanenbaum',
    },
  ];

  return (
    <section>
      <Books books={books} />
      <Input />
    </section>
  );
};

export default BookPage;
