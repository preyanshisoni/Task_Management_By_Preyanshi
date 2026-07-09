# Task Management System

A full-stack Task Management System built with the MERN stack. The application allows users to register, log in securely, create projects, manage tasks, and search/filter tasks.

---

## Tech Stack

### Frontend

* React.js
* React Router DOM
* Axios
* Tailwind CSS

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* bcrypt

---

## Features

### Authentication

* User Registration
* User Login
* JWT Authentication
* Password Hashing with bcrypt

### Project Management

* Create Project
* View Projects
* Update Project
* Delete Project

### Task Management

* Create Task
* View Tasks
* Update Task
* Delete Task
* Search Tasks
* Filter by Status
* Filter by Priority
* Filter by Project

---

## Project Structure

```
Task-Management-System/

├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   ├── .env.example
│   ├── package.json
│   └── server.js
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   ├── hooks/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
└── README.md
```

---

## Installation

### Clone the Repository

```bash
git clone <https://github.com/preyanshisoni/Task_Management_By_Preyanshi.git>
```

---

### Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file inside the `backend` folder.

Example:

```env
PORT=3000
DB_URL=mongodb://localhost:27017/task_management_system
ACCESS_TOKEN_SECRET=your_secret_key
```

Start the backend server:

```bash
npm run dev
```

---

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

The frontend will run on:

```
http://localhost:5173
```

---

## API Endpoints

### Authentication

| Method | Endpoint             |
| ------ | -------------------- |
| POST   | `/api/auth/register` |
| POST   | `/api/auth/login`    |

### Projects

| Method | Endpoint            |
| ------ | ------------------- |
| GET    | `/api/projects`     |
| POST   | `/api/projects`     |
| PUT    | `/api/projects/:id` |
| DELETE | `/api/projects/:id` |

### Tasks

| Method | Endpoint         |
| ------ | ---------------- |
| GET    | `/api/tasks`     |
| POST   | `/api/tasks`     |
| PUT    | `/api/tasks/:id` |
| DELETE | `/api/tasks/:id` |

### Task Filters

```
GET /api/tasks?status=Todo
GET /api/tasks?priority=High
GET /api/tasks?project=<projectId>
GET /api/tasks?search=keyword
```

Filters can also be combined.

Example:

```
GET /api/tasks?status=Completed&priority=High&search=dashboard
```

---

## Environment Variables

Create a `.env` file inside the backend folder.

| Variable            | Description               |
| ------------------- | ------------------------- |
| PORT                | Server Port               |
| DB_URL              | MongoDB Connection String |
| ACCESS_TOKEN_SECRET | JWT Secret Key            |

---

## Submission Notes

* Environment variables are stored in `.env`.
* No hardcoded credentials are used.
* `.env` is excluded from version control.
* `.env.example` is included for reference.

---

## Future Improvements

* Pagination
* Sorting
* Refresh Tokens
* File Upload
* Role-Based Authorization

---

## Author

**Preyanshi Soni**
