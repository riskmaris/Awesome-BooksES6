// const addBook = (bookDetails, title, author) => {
//   const book = { title, author };
//   bookDetails.push(book);
//   saveBooksToStorage(bookDetails);
// };

// const saveBooksToStorage = (bookDetails) => {
//   localStorage.setItem('booksData', JSON.stringify(bookDetails));
// };

// export default addBook;

const saveBooksToStorage = (bookDetails) => {
  localStorage.setItem('booksData', JSON.stringify(bookDetails));
};

const addBook = (bookDetails, title, author) => {
  const book = { title, author };
  bookDetails.push(book);
  saveBooksToStorage(bookDetails);
};

export default addBook;
