// Immediately-invoked function expression (IIFE) to fetch movies and reviews
(async () => {
    // Fetch movies from the API
    const books = await API.getBooks();

    console.log(books);

    // Sort movies alphabetically by title
    books.sort((a, b) => a.author.localeCompare(b.author));

    // Get the movies container element
    const booksDiv = document.getElementById("books");

    // Display each movie in the container
    for (const book of books) {
        const bookDiv = document.createElement("tbody");

        // Apply class to movie container
        bookDiv.className = "table";

        bookDiv.innerHTML = `
            <tbody id="books">
                <td>${book.title}</td>
                <td>${book.author}</td>
                <td>${book.isbn}</td>
                <td> <a href="book.html?id=${book.id}">Show Book<a/> </td>
            </tbody>
            `;

        booksDiv.appendChild(bookDiv);

    }

})();
