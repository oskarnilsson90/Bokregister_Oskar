// JavaScript code for handling book deletion confirmation form submission
const BOOK_ID = new URLSearchParams(window.location.search).get("id");

// Immediately-invoked function expression (IIFE) for fetching book details
(async () => {
    // Fetch book details based on the provided BOOK_ID
    const book = await API.getBook(BOOK_ID);

    // Set the book title in the placeholder h3 element
    document.querySelector("h3").textContent = book.title;

    // Get the book details container
    const bookDiv = document.getElementById("book");

    // Populate the book details container with author and ISBN information
    bookDiv.innerHTML = `
        <p><i>Author: ${book.author}</i></p>
        <p><i>ISBN: ${book.isbn}</i></p>`;
})();

// Event listener for the book deletion confirmation form submission
document.getElementById("deleteBook-form").addEventListener("submit", async function(e){
    e.preventDefault();

    try {
        // Attempt to delete the book using the API
        await API.deleteBook(BOOK_ID);

        // Display a success message on successful deletion
        this.innerHTML = "<p><b>Book deleted successfully</b></p>";

        // Optionally, redirect to home after deletion
        setTimeout(() => {
            window.location.href = "index.html";  // Redirect to home after 2 seconds
        }, 2000);
    } 
    catch (error) {
        // Display an error message if book deletion fails
        this.innerHTML = `<p><b>${error}</b></p>`;
    }
});