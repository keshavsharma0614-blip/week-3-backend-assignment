# Week 3 - Full Stack Backend Assignment

This project connects a React frontend with an Express.js backend and MongoDB. It includes authentication, user management, image upload, and a Task Manager mini project.

## Technologies Used

- React
- Vite
- Axios
- React Router DOM
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcrypt
- Multer
- CORS

## Features

### User Authentication

- User registration
- User login
- Password hashing using bcrypt
- JWT-based authentication
- Protected profile route

### User Management

- Create users
- View users
- Update users
- Delete users
- React frontend connected with backend API

### Image Upload

- Image upload using Multer
- Image preview in React
- Image storage on the backend
- Uploaded image display in the profile
- Image remains available after page refresh

### React Routing

The frontend includes routes for:

- Users
- Register
- Login
- Profile
- Tasks

## Mini Project - Task Manager

The Task Manager is the mini project for Week 3.

It uses a React frontend connected to an Express.js and MongoDB backend.

### Task Manager Features

- JWT-protected task API
- User-specific tasks
- Add new tasks
- Mark tasks as completed
- Mark completed tasks as pending
- Delete tasks
- Filter tasks by:
  - All
  - Pending
  - Completed
- MongoDB task storage
- React and Express API integration

## Project Structure

    week-3-backend-assignment/
    ├── user-api/
    │   ├── middleware/
    │   ├── models/
    │   ├── routes/
    │   ├── uploads/
    │   ├── .env.example
    │   ├── package.json
    │   └── server.js
    │
    └── frontend/
        ├── src/
        │   ├── pages/
        │   │   ├── Users.jsx
        │   │   ├── Register.jsx
        │   │   ├── Login.jsx
        │   │   ├── Profile.jsx
        │   │   └── Tasks.jsx
        │   ├── App.jsx
        │   └── main.jsx
        ├── package.json
        └── vite.config.js

## API Integration

The React frontend communicates with the Express backend using Axios.

Authentication is handled using JWT tokens stored in browser local storage and sent through the Authorization header for protected requests.

## Conclusion

This project demonstrates full-stack integration between React, Express.js, and MongoDB with authentication, CRUD operations, image upload, routing, and a complete Task Manager mini project.
