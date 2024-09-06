// Base URL for the API
const API_BASE_URL = "https://localhost:7018/";

// API endpoints
const ENDPOINTS = {
    Books: `${API_BASE_URL}api/Books`
};

// API object for handling various API requests
const API = {
    // Fetches all books from the API
    async getBooks(){
        const response = await fetch(ENDPOINTS.Books);
        return response.json();
    },

    // Fetches a specific book by ID from the API
    async getBook(id){
        const response = await fetch(ENDPOINTS.Books + `/${id}`);
        return response.json();
    },

    // Creates a new book using the provided title, author and isbn-number
    async createBook(title, author, isbn) {
    
        // Send a POST request to create a new book
        const response = await fetch(ENDPOINTS.Books, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ title, author, isbn })
        });

        // Check if the response is in JSON format
        if (response.headers.get("content-type")?.includes("application/json")) {
            return response.json();
        } else {
            return { message: "Book An error occurred while creating the book." };
        }
    },

    // Edits an existing book with the provided ID, title, author and isbn-number
    async editBook(id, title, author, isbn){

        // Send a PUT request to edit an existing book
        const response = await fetch(ENDPOINTS.Books + `/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ id, title, author, isbn })
        });

        // Check if the response is in JSON format
        if (response.headers.get("content-type")?.includes("application/json")) {
            return response.json();
        } else {
            return { message: "Book An error occurred while editing the book." };
        }
    },

    // Deletes a book with the provided ID
    async deleteBook(BOOK_ID){

        // Send a DELETE request to delete a book
        const response = await fetch(ENDPOINTS.Books + `/${BOOK_ID}`, {
            method: "DELETE"
        });

        // Check if the response is in JSON format
        if (response.headers.get("content-type")?.includes("application/json")) {
            return response.json();
        } else {
            return { message: "Book An error occurred while deleting the book." };
        }
    },
};

// Function to display messages in the message container
function showMessage(message) {
    const messageContainer = document.getElementById("message-container");
    
    // Create a new div element
    const messageDiv = document.createElement("div");
    messageDiv.textContent = message;

    // Add the new div element to the message container
    messageContainer.appendChild(messageDiv);
};
