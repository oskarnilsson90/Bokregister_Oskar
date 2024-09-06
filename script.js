// Immediately-invoked function expression (IIFE) to fetch books and reviews
(async () => {
    // Fetch books from the API
    const books = await API.getBooks();

    // Sort books alphabetically by author
    books.sort((a, b) => a.author.localeCompare(b.author));

    // Get the table body container element (the <tbody> inside the table)
    const booksTableBody = document.createElement('tbody'); // Create one tbody

    // Display each book in the table
    for (const book of books) {
        const bookRow = document.createElement('tr'); // Create a new row for each book

        // Create table cells for title, author, ISBN, and action link
        bookRow.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a href="book.html?id=${book.id}" class="btn">Show Book</a></td>
        `;

        // Append the row to the table body
        booksTableBody.appendChild(bookRow);
    }

    // Append the table body to the table (assuming table has id="books")
    document.getElementById('books').appendChild(booksTableBody);
})();