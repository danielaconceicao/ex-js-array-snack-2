const books = [
    {
        title: "React Billionaire",
        pages: 250,
        author: {
            name: 'Alice',
            age: 35
        },
        available: false,
        price: 101,
        tags: ['advanced', 'js', 'react', 'senior']
    },
    {
        title: "Advanced JS",
        pages: 500,
        author: {
            name: 'Bob',
            age: 20
        },
        available: true,
        price: 25,
        tags: ['advanced', 'js', 'mid-senior']
    },
    {
        title: "CSS Secrets",
        pages: 320,
        author: {
            name: 'Alice',
            age: 17
        },
        available: true,
        price: 8,
        tags: ['html', 'css', 'junior']
    },
    {
        title: "HTML Mastery",
        pages: 200,
        author: {
            name: 'Charlie',
            age: 50
        },
        available: false,
        price: 48,
        tags: ['html', 'advanced', 'junior', 'mid-senior']
    },
];

const availableBooks = books.filter(book => book.available === true);

const discountedBooks = availableBooks.map(book => ({...book, price: book.price - (book.price * 0.2)}));

const FullPriceBook = discountedBooks.filter(book => Number.isInteger(book.price))

console.log(FullPriceBook);

