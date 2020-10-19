import publishers, { Publisher } from './publisher';

export interface Book {
    bookId: number;
    code: string;
    name: string;
    publisher: Publisher;
    pages: string;
}

const books: Book[] = [
    {
        bookId: 1,
        code: 'B1',
        name: 'Book 1',
        publisher: publishers.find(p => (p.publisherId === 1)),
        pages: '',
    },
    {
        bookId: 2,
        code: 'B2',
        name: 'Book 2',
        publisher: publishers.find(p => (p.publisherId === 1)),
        pages: '',
    },
]

export default books;
