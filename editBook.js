// JavaScript code for handling movie editing form submission
const BOOK_ID = new URLSearchParams(window.location.search).get("id");

// Immediately-invoked function expression (IIFE) for fetching book details
(async () => {
    // Fetch book details based on the provided bookId
    const book = await API.getBook(BOOK_ID);

    // Set the book title in the placeholder h3 element
    document.querySelector("h3").textContent = book.title;

    // Get the book details container
    const bookDiv = document.getElementById("book");

    // Populate the book details container with author and isbn-number information
    bookDiv.innerHTML = `
        <p><i>Author: ${book.author}</i></p>
        <p><i>ISBN: ${book.isbn}</i></p>`;

    // Populate the form fields with existing data
    document.getElementById("book-title").value = book.title;
    document.getElementById("book-author").value = book.author;
    document.getElementById("book-isbn").value = book.isbn;
})();

// Event listener for the book editing form submission
document.getElementById("editBook-form").addEventListener("submit", async function(e){
    e.preventDefault();

    // Retrieve values from the input fields
    const title = document.getElementById("book-title").value;
    const author = document.getElementById("book-author").value;
    const isbn = document.getElementById("book-isbn").value;

    // Validation for book title
    if (!title.trim()) {
        showMessage("Title cannot be empty.");
        return;
    }

    // Validation for book title
    if (!author.trim()) {
        showMessage("Author cannot be empty.");
        return;
    }

    // Validation for ISBN length (must be 13 digits)
    if (isbn.length !== 13 || !/^\d{13}$/.test(isbn)) {
        showMessage("ISBN must be exactly 13 digits.");
        return;
    }

    try{
        // Fetch existing books from the API
        const books = await API.getBooks();

        // Check if the ISBN already exists in another book
        const isbnExists = books.some(book => book.isbn === isbn && book.id !== parseInt(BOOK_ID));
        if (isbnExists) {
            showMessage("A book with this ISBN already exists.");
            return;
        }
        
        // Attempt to edit the book using the API
        await API.editBook(BOOK_ID, title, author, isbn );

        // Display a success message on successful book editing
        this.innerHTML = "<p><b>Thanks for editing the book</b><p/>";

        // Update the displayed book details without reloading the page
        document.querySelector("h3").textContent = title; // Update the book title in the heading
        document.getElementById("book").innerHTML = `
            <p><i>Author: ${author}</i></p>
            <p><i>ISBN: ${isbn}</i></p>`;
    }
    catch(error){
        // Display an error message if book editing fails
        this.innerHTML = `<p><b>${error}</b><p/>`;
    }
});