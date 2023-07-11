import {AllBooks} from '../modules/allBooks.js';
import updateTime from '../modules/updateTime.js';

const mybooks = new AllBooks();

document.getElementById('addBook').addEventListener('click', () => {
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;

  if (title !== '' && author !== '') {
    mybooks.addBook(title, author);
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
  }
});

document.getElementById('list').addEventListener('click', () => {
  mybooks.loadBooksFromStorage();
  mybooks.displayBooks();
  document.getElementById('book-title').style.display = 'block';
  document.getElementById('book-form').style.display = 'none';
  document.getElementById('contact').style.display = 'none';
});

document.getElementById('newBook').addEventListener('click', () => {
  document.getElementById('book-form').style.display = '';
  document.getElementById('tableBook').style.display = 'none';
  document.getElementById('book-title').style.display = 'none';
  document.getElementById('contact').style.display = 'none';
});

document.getElementById('contact-link').addEventListener('click', () => {
  document.getElementById('contact').style.display = 'flex';
  document.getElementById('book-form').style.display = 'none';
  document.getElementById('tableBook').style.display = 'none';
  document.getElementById('book-title').style.display = 'none';
});

updateTime();
setInterval(updateTime, 1000);