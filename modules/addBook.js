const saveBooksToStorage = (bookDetails) => {
  localStorage.setItem('booksData', JSON.stringify(bookDetails));
};

const addBook = (bookDetails, title, author) => {
  const book = { title, author };
  bookDetails.push(book);
  saveBooksToStorage(bookDetails);
};

export default addBook;
