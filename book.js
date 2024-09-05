// Get the book ID from the URL parameters
const BOOK_ID = new URLSearchParams(window.location.search).get("id");

// Immediately-invoked function expression (IIFE) to fetch and display book details
(async () => {
    if (!BOOK_ID) {
        console.error("No book ID provided in the URL");
        return;
    }

    try {
        // Fetch book details based on the provided book ID
        const book = await API.getBook(BOOK_ID);

        // Log book details to debug
        console.log(book);

        // Set the book title in the heading
        document.querySelector("h3").textContent = book.title;

        // Get the book details container
        const bookDiv = document.getElementById("book-info");

        // Populate the container with book details and action links
        bookDiv.innerHTML = `
            <p><i>Author: ${book.author}</i></p>
            <p><i>ISBN: ${book.isbn}</i></p>
            <p>
                <a href="editBook.html?id=${book.id}">Edit</a> 
                <a href="deleteBook.html?id=${book.id}">Delete</a>
                <a href="index.html">Back</a>
            </p>`;
    } catch (error) {
        console.error("Failed to fetch book details:", error);
    }
})();
