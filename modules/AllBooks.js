export class AllBooks {
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