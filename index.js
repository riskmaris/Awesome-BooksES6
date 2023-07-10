class AllBooks {
  constructor() {
    this.loadBooksFromStorage();
  }

  loadBooksFromStorage() {
    const previousData = localStorage.getItem('booksData');
    this.bookDetails = previousData ? JSON.parse(previousData) : [];
  }

  displayBooks() {
    const bookStore = document.getElementById('allBooks');
    bookStore.innerHTML = '';

    if (this.bookDetails.length > 0) {
      for (let i = 0; i < this.bookDetails.length; i += 1) {
        const { title, author } = this.bookDetails[i];
        bookStore.innerHTML += `<tr id="book${i}" class="book-store"> 
                                    <td>${title} by ${author}</td>
                                    <td><button class="remove-button">Remove</button></td>
                                  </tr>`;
      }

      const deleteRow = document.querySelectorAll('.book-store');
      const removeBtn = document.querySelectorAll('.remove-button');

      for (let i = 0; i < removeBtn.length; i += 1) {
        removeBtn[i].addEventListener('click', () => {
          deleteRow[i].remove();
          this.removeBook(i);
          this.displayBooks();
        });
      }

      document.getElementById('book-title').style.display = 'block';
      document.getElementById('tableBook').style.display = 'flex';
    } else {
      document.getElementById('book-title').style.display = '';
      document.getElementById('tableBook').style.display = '';
    }
  }

  addBook(title, author) {
    const book = { title, author };
    this.bookDetails.push(book);
    this.saveBooksToStorage();
  }

  removeBook(index) {
    this.bookDetails.splice(index, 1);
    this.saveBooksToStorage();
  }

  saveBooksToStorage() {
    localStorage.setItem('booksData', JSON.stringify(this.bookDetails));
  }
}

function updateTime() {
  const currentDate = new Date();
  const dateTimeString = currentDate.toLocaleString();
  document.getElementById('time').textContent = dateTimeString;
}

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
