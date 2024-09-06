// Base URL for the API
const API_BASE_URL = "https://localhost:7018/";

// API endpoints
const ENDPOINTS = {
    Books: `${API_BASE_URL}api/Books`,
    // // Reviews: `${API_BASE_URL}api/Reviews/`,
    // Register: `${API_BASE_URL}register`,
    // Login: `${API_BASE_URL}login`,
    // Refresh: `${API_BASE_URL}refresh`,
    // UserInfo: `${API_BASE_URL}manage/info`
};

// API object for handling various API requests
const API = {
    // Fetches all movies from the API
    async getBooks(){
        const response = await fetch(ENDPOINTS.Books);
        return response.json();
    },

    // Fetches a specific movie by ID from the API
    async getBook(id){
        const response = await fetch(ENDPOINTS.Books + `/${id}`);
        return response.json();
    },

    // Creates a new movie using the provided title and release year
    async createBook(title, author, isbn) {

        // // Get the access token for authentication
        // const accessToken = await AUTH.getAccessToken();

        // // Check if the user is logged in
        // if (!accessToken) {
        //     showMessage("You must log in to continue.");
        //     window.location.href = "login.html";
        //     return;
        // }
    
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

    // Edits an existing movie with the provided ID, title, and release year
    async editBook(id, title, author, isbn){

        // // Get the access token for authentication
        // const accessToken = await AUTH.getAccessToken();

        // // Check if the user is logged in
        // if (!accessToken) {
        //     showMessage("You must log in to continue.");
        //     window.location.href = "login.html";
        //     return;
        // }

        // Send a PUT request to edit an existing movie
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

    // Deletes a movie with the provided ID
    async deleteMovie(movieId){

        // // Get the access token for authentication
        // const accessToken = await AUTH.getAccessToken();

        // // Check if the user is logged in
        // if (!accessToken) {
        //     showMessage("You must log in to continue.");
        //     window.location.href = "login.html";
        //     return;
        // }

        // Send a DELETE request to delete a movie
        const response = await fetch(ENDPOINTS.Movies + `/${movieId}`, {
            method: "DELETE",
            headers: {
                "Authorization": `Bearer ${accessToken}`
            }
        });

        // Check if the response is in JSON format
        if (response.headers.get("content-type")?.includes("application/json")) {
            return response.json();
        } else {
            return { message: "Movie An error occurred while deleting the movie." };
        }
    },

    // // Fetches all reviews from the API
    // async getReviews(){
    //     const response = await fetch(ENDPOINTS.Reviews);
    //     return response.json();
    // },

    // // Fetches a specific review by ID from the API
    // async getReview(id){
    //     const response = await fetch(ENDPOINTS.Reviews + id);
    //     return response.json();
    // },

//     // Creates a new review using the provided rating, comment, and movie ID
//     async createReview(rating, comment, movieId){

//         // Get the access token for authentication
//         const accessToken = await AUTH.getAccessToken();

//         // Check if the user is logged in
//         if (!accessToken) {
//             showMessage("You must log in to continue.");
//             window.location.href = "login.html";
//             return;
//         }

//         // Send a POST request to create a new review
//         const response = await fetch(ENDPOINTS.Reviews, {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//                 "Authorization": `Bearer ${accessToken}`
//             },
//             body: JSON.stringify({ rating, comment, movieId })
//         });

//         // Check if the response is in JSON format
//         if (response.headers.get("content-type")?.includes("application/json")) {
//             return response.json();
//         } else {
//             return { message: "An error occurred while creating the review." };
//         };
//     },

//     // Edits an existing review with the provided ID, rating, and comment
//     async editReview(id, rating, comment){

//         // Get the access token for authentication
//         const accessToken = await AUTH.getAccessToken();

//         // Check if the user is logged in
//         if (!accessToken) {
//             showMessage("You must log in to continue.");
//             window.location.href = "login.html";
//             return;
//         }

//         // // Send a PUT request to edit an existing review
//         // const response = await fetch(ENDPOINTS.Reviews + id, {
//         //     method: "PUT",
//         //     headers: {
//         //         "Content-Type": "application/json",
//         //         "Authorization": `Bearer ${accessToken}`
//         //     },
//         //     body: JSON.stringify({ id, rating, comment })
//         // });

//         // Check if the response is in JSON format
//         if (response.headers.get("content-type")?.includes("application/json")) {
//             return response.json();
//         } else {
//             return { message: "Movie An error occurred while editing the review." };
//         }
//     },

//     // Deletes a review with the provided ID
//     async deleteReview(reviewId){

//         // Get the access token for authentication
//         const accessToken = await AUTH.getAccessToken();

//         // Check if the user is logged in
//         if (!accessToken) {
//             showMessage("You must log in to continue.");
//             window.location.href = "login.html";
//             return;
//         }

//         // Send a DELETE request to delete a review
//         const response = await fetch(ENDPOINTS.Reviews + reviewId, {
//             method: "DELETE",
//             headers: {
//                 "Authorization": `Bearer ${accessToken}`
//             }
//         });

//         // Check if the response is in JSON format
//         if (response.headers.get("content-type")?.includes("application/json")) {
//             return response.json();
//         } else {
//             return { message: "Movie An error occurred while deleting the review." };
//         }
    // },

//     // Registers a new user with the provided email and password
//     async register(email, password){
//         const response = await fetch(ENDPOINTS.Register, {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify({ email, password })
//         });
//         // Check if the response is in JSON format
//         if (response.headers.get("content-type")?.includes("application/json")) {
//             return response.json();
//         } else {
//             return { message: "Register An error occurred while registing an user." };
//         };
//     },

//     // Logs in an existing user with the provided email and password
//     async login(email, password){
//         const response = await fetch(ENDPOINTS.Login, {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify({ email, password })
//         });
//         // Check if the response is in JSON format
//         if (response.headers.get("content-type")?.includes("application/json")) {
//             return response.json();
//         } else {
//             return { message: "Login An error occurred while login in an user." };
//         };
//     },

//     // Fetches user information
//     async getUserInfo(){
//         const accessToken = await AUTH.getAccessToken()

//         const response = await fetch(ENDPOINTS.UserInfo, {
//             headers: {
//                 "Authorization": `Bearer ${accessToken}`
//             }
//         });
//         return response.json();
//     },

//     // Refreshes the access token using the provided refresh token
//     async refreshAccessToken(refreshToken){
//         const response = await fetch(ENDPOINTS.Refresh, {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify({ refreshToken })
//         });
//         return response.json();
//     }
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

// // Authentication object for handling user authentication
// const AUTH = {
//     // Retrieves the access token for the current user
//     async getAccessToken(){
//         const accessToken = localStorage.getItem("accessToken");
//         const expiration = localStorage.getItem("expiration");

//         // Check if the access token is valid and not expired
//         if(accessToken && expiration > Date.now()){
//             return accessToken;
//         }

//         const refreshToken = localStorage.getItem("refreshToken");
        
//         // Throw an error if the refresh token is not available
//         if(!refreshToken){
//             throw new Error("Logged out");
//         }

//         // Send a request to refresh the access token
//         const response = await API.refreshAccessToken(refreshToken);

//         // Handle the authentication response
//         AUTH.handleAuthResponse(response);
//         return response.accessToken;
//     },

//     // Handles the authentication response by storing tokens in local storage
//     handleAuthResponse(response){
//         const accessToken = response.accessToken;
//         const refreshToken = response.refreshToken;
//         const expiration = Date.now() + (response.expiresIn * 1000);

//         // Store tokens in local storage
//         localStorage.setItem("accessToken", accessToken);
//         localStorage.setItem("refreshToken", refreshToken);
//         localStorage.setItem("expiration", expiration);
//     },

//     // Displays user information in the UI
//     async showUserInfo(){
//         try{
//             // Fetch user information from the API
//             const userInfo = await API.getUserInfo();
//             const p = document.createElement("p");
//             p.textContent = `Logged in as ${userInfo.email}`;

//             const button = document.createElement("button");
//             button.textContent = "Log out";
//             button.onclick = AUTH.logout;

//             p.appendChild(button);
//             document.body.appendChild(p);

//             const loginLink = document. getElementById("login-link");

//             // Hide the login link if the user is logged in
//             if(loginLink){
//                 loginLink.style.display = "none";
//             }
//         }
//         catch(error){
//             document.body.innerHTML += `<p>Not logged in</p>`;
//         }
//     },

//     // Logs out the current user by removing tokens from local storage
//     logout(){
//         localStorage.removeItem("accessToken");
//         localStorage.removeItem("refreshToken");
//         localStorage.removeItem("expiration");

//         // Redirect to the home page after logout
//         window.location.href = "/";
//     }
// };

// // Display user information on page load
// AUTH.showUserInfo();