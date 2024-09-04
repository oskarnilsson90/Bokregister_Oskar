let bookList = [];

function renderBooks(filteredBooks = bookList) {
    const bookTableBody = document.getElementById("books");
    bookTableBody.innerHTML = "";

    if (filteredBooks.length === 0) {
        const messageRow = document.createElement("tr");
        const messageCell = document.createElement("td");
        messageCell.colSpan = 4;
        messageCell.textContent = "No books in the register! You can add books in the form.";
        messageCell.style.textAlign = "center";
        messageRow.appendChild(messageCell);
        bookTableBody.appendChild(messageRow);
    } else {
        filteredBooks.forEach((book, index) => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${book.title}</td>
                <td>${book.author}</td>
                <td>${book.isbn}</td>
                <td><button class="info-btn" data-index="${index}">Info</button></td>
            `;

            bookTableBody.appendChild(row);
        });
    }

    document.querySelectorAll('.info-btn').forEach(button => {
        button.addEventListener('click', (event) => {
            const bookIndex = event.target.getAttribute('data-index');
            showBookDetails(bookList[bookIndex]);
        });
    });
}

function showBookDetails(book) {
    document.getElementById("book-list").style.display = "none";
    document.getElementById("book-details").style.display = "block";

    document.getElementById('book-title').textContent = `Title: ${book.title}`;
    document.getElementById('book-author').textContent = `Author: ${book.author}`;
    document.getElementById('book-isbn').textContent = `ISBN: ${book.isbn}`;
}

document.getElementById("add-book-form").addEventListener("submit", (event) => {
    event.preventDefault();
    
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const isbn = document.getElementById("isbn").value;

    const bookExists = bookList.some(book => book.title.toLowerCase() === title.toLowerCase() || book.isbn === isbn);

    if (bookExists) {
        alert("A book with the same title or ISBN already exists in the register. Please enter a different book.")
    } else {
        const newBook = {
            title: title,
            author: author,
            isbn: isbn
        };
    
        bookList.push(newBook);
    
        renderBooks();
    
        document.getElementById("add-book-form").reset();
    }
});

document.getElementById('search-input').addEventListener('input', (event) => {
    const query = event.target.value.toLowerCase();

    const filteredBooks = bookList.filter(book => 
        book.title.toLowerCase().includes(query) || 
        book.author.toLowerCase().includes(query) || 
        book.isbn.includes(query)
    );

    renderBooks(filteredBooks);
});

document.getElementById('back-to-list').addEventListener('click', () => {
    document.getElementById('book-details').style.display = 'none';
    document.getElementById('book-list').style.display = 'block';
});

renderBooks();
