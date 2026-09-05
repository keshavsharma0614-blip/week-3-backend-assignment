# Week 3 Backend Assignment

## Full Stack Integration

This project is a Week 3 Full Stack Development assignment focused on integrating a React frontend with a Node.js, Express.js, and MongoDB backend.

The project implements user management, authentication, JWT-based protected routes, React routing, and image upload functionality.

---

## Technologies Used

### Frontend

- React.js
- Vite
- Axios
- React Router DOM
- HTML
- CSS

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (JSON Web Token)
- bcryptjs
- Multer
- dotenv
- CORS

---

## Features Completed

### 1. React Frontend

A React frontend was created using Vite and integrated with the backend REST API using Axios.

The frontend communicates with the Express backend for user management and authentication operations.

### 2. User Management

The application provides complete user CRUD functionality.

#### Create User

Users can be added from the React frontend.

#### Read Users

The frontend fetches and displays users from the backend API.

#### Update User

Existing user information can be edited and updated.

#### Delete User

Users can be deleted from the frontend.

#### CRUD Operations

- Create → Add User
- Read → Display Users
- Update → Edit User
- Delete → Delete User

---

### 3. User Registration

A dedicated Register page was created.

Users can register using:

- Name
- Email
- Password

The registration request is sent from React to the Express backend.

Passwords are securely hashed using bcryptjs before being stored in MongoDB.

---

### 4. User Login

A Login page was implemented and connected with the backend authentication API.

The login process works as follows:

1. User enters email and password.
2. React sends the login request to the Express API.
3. Backend verifies the credentials.
4. Backend generates a JWT token.
5. JWT token is returned to the frontend.
6. Token is stored in browser localStorage.

---

### 5. JWT Authentication

JWT-based authentication is implemented for protected backend routes.

The frontend sends the JWT token using the Authorization header.

The backend verifies the token using authentication middleware before allowing access to protected routes.

---

### 6. Protected Profile

A protected Profile page was implemented.

The Profile page sends the stored JWT token to the backend and retrieves the authenticated user's profile information.

The profile displays:

- User Name
- User Email
- Uploaded Image

Only authenticated users can access the protected profile API.

---

### 7. React Routing

React Router DOM was implemented for frontend navigation.

The application currently contains:

- Users
- Register
- Login
- Profile

Navigation links are provided between the main pages.

---

### 8. Image Upload

Image upload functionality was implemented using Multer.

The user can select an image from the React frontend and upload it to the Express backend.

#### Image Upload Features

- Select image from device
- Image preview before upload
- Upload image using React
- Multer handles the uploaded file
- Image is stored in the uploads folder
- Image path is stored in MongoDB
- Uploaded image is displayed on the Profile page
- Image remains available after page refresh

#### Image Upload Flow

Select Image  
↓  
React Frontend  
↓  
Image Preview  
↓  
FormData  
↓  
Express Backend  
↓  
Multer  
↓  
Uploads Folder  
↓  
Image Path Stored in MongoDB  
↓  
Profile Page  
↓  
Display Image

---

## Backend API

The backend provides REST APIs for user management and authentication.

### User APIs

- POST `/api/users/register`
- POST `/api/users/login`
- GET `/api/users`
- GET `/api/users/:id`
- PUT `/api/users/:id`
- DELETE `/api/users/:id`

### Profile API

- GET `/api/profile`

This route is protected using JWT authentication.

### Image Upload API

- POST `/api/upload`

This route requires JWT authentication and accepts an image using Multer.

---

## Database

MongoDB is used as the database for storing user information.

The User model contains:

- Name
- Email
- Password
- Image
- Created At
- Updated At

Passwords are stored in hashed form using bcryptjs.

The uploaded image path is stored in the Image field.

---

## Middleware

The project uses middleware for authentication and image uploading.

### Authentication Middleware

The JWT authentication middleware verifies the user's token and provides the authenticated user's ID to protected routes.

### Multer Middleware

Multer is used to process image uploads and save uploaded files inside the uploads directory.

---

## Project Structure

    week-3-backend-assignment/
    |
    |-- frontend/
    |   |
    |   |-- src/
    |   |   |
    |   |   |-- pages/
    |   |   |   |-- Users.jsx
    |   |   |   |-- Register.jsx
    |   |   |   |-- Login.jsx
    |   |   |   |-- Profile.jsx
    |   |   |
    |   |   |-- App.jsx
    |   |
    |   |-- package.json
    |
    |-- user-api/
        |
        |-- middleware/
        |   |-- auth.js
        |   |-- upload.js
        |
        |-- models/
        |   |-- User.js
        |
        |-- routes/
        |   |-- users.js
        |   |-- profile.js
        |   |-- upload.js
        |
        |-- uploads/
        |
        |-- .env
        |-- .env.example
        |-- .gitignore
        |-- package.json
        |-- server.js

---

## Application Flow

React Frontend  
↓  
Register / Login / Users / Profile  
↓  
Express REST API  
↓  
JWT Authentication  
↓  
MongoDB  
↓  
Multer Image Upload  
↓  
Image Storage and Profile Display

---

## Testing

The implemented features were tested through the React frontend and backend API.

The following functionality has been tested:

- Backend connection
- MongoDB connection
- User registration
- User login
- Password hashing
- JWT authentication
- Protected profile
- User creation
- User reading
- User update
- User deletion
- Image selection
- Image preview
- Image upload
- Image display
- Image persistence after refresh

---

## Current Status

The following Week 3 features have been successfully implemented:

- [x] React Frontend
- [x] Vite Setup
- [x] Backend API Integration
- [x] MongoDB Integration
- [x] User Registration
- [x] User Login
- [x] Password Hashing
- [x] JWT Authentication
- [x] Protected Profile
- [x] React Routing
- [x] User CRUD
- [x] Multer Image Upload
- [x] Image Preview
- [x] Image Storage
- [x] Image Display
- [x] Image Persistence After Refresh

---

## Future Work

The remaining Week 3 requirements will be implemented in the next phase.

Planned functionality includes:

- Task Manager mini project
- React task management interface
- Task CRUD operations
- Task filtering
- Integration of task management with the existing backend

---

## Conclusion

This project demonstrates full-stack integration between a React frontend and an Express.js backend connected to MongoDB.

The completed features include user management, registration, login, password hashing, JWT authentication, protected profile access, React routing, and image upload with preview and persistent display.

The project will be extended further with the Task Manager mini project and task filtering functionality.

