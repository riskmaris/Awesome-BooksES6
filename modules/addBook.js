const addBook = (bookDetails, title, author) => {
  const book = { title, author };
  bookDetails.push(book);
  saveBooksToStorage(bookDetails);
};

const saveBooksToStorage = (bookDetails) => {
  localStorage.setItem('booksData', JSON.stringify(bookDetails));
};

export default addBook;