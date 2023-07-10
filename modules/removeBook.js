const removeBook = (bookDetails, index) => {
  bookDetails.splice(index, 1);
  saveBooksToStorage(bookDetails);
};

const saveBooksToStorage = (bookDetails) => {
  localStorage.setItem('booksData', JSON.stringify(bookDetails));
};

export default removeBook;
