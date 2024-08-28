let bookList = [];

function renderBooks(filteredBooks = bookList) {
    const bookTableBody = document.getElementById("books");
    bookTableBody.innerHTML = "";

    if (filteredBooks.length === 0) {
        const messageRow = document.createElement("tr");
        const messageCell = document.createElement("td");
        messageCell.colSpan = 3;
        messageCell.textContent = "No books in the register! You can add books in the form.";
        messageCell.style.textAlign = "center";
        messageRow.appendChild(messageCell);
        bookTableBody.appendChild(messageRow);
    } else {
        filteredBooks.forEach(book => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${book.title}</td>
                <td>${book.author}</td>
                <td>${book.isbn}</td>
            `;

            bookTableBody.appendChild(row);

        });
    }
}

document.getElementById("add-book-form").addEventListener("submit", (event) => {
    event.preventDefault();
    
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const isbn = document.getElementById("isbn").value;

    const newBook = {
        title: title,
        author: author,
        isbn: isbn
    };

    bookList.push(newBook);

    renderBooks();

    document.getElementById("add-book-form").reset();
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

renderBooks();
