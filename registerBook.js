// JavaScript code for handling book creation form submission
document.getElementById("book-form").addEventListener("submit", async function(e){
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

    try{
        // Fetch existing books from the API
        const books = await API.getBooks();

        // Check if the ISBN already exists
        const isbnExists = books.some(book => book.isbn === isbn);
        if (isbnExists) {
            showMessage("A book with this ISBN already exists.");
            return;
        }
        
        // Attempt to create a new book using the API
        await API.createBook(title, author, isbn);

        // Display a success message on successful creation
        this.innerHTML = `<p><b>Thanks for the book</b><p/>`;
    }
    catch(error){
        // Display an error message if book creation fails
        this.innerHTML = `<p><b>${error}</b><p/>`;
    }
});