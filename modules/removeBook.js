const saveBooksToStorage = (bookDetails) => {
    localStorage.setItem('booksData', JSON.stringify(bookDetails));
  };

const removeBook = (bookDetails, index) => {
  bookDetails.splice(index, 1);
  saveBooksToStorage(bookDetails);
};

export default removeBook;
