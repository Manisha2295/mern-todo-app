# 📝 MERN Todo App

A full-stack Todo application built using the MERN stack (MongoDB, Express, React, Node.js). This app allows users to manage daily tasks efficiently with CRUD operations.

---

## 🚀 Features

- ➕ Add new tasks
- ✏️ Edit existing tasks
- ✅ Mark tasks as completed
- ❌ Delete tasks
- 📦 Data stored in database

---

## 🛠️ Tech Stack

**Frontend:**
- React.js
- HTML, CSS, JavaScript

**Backend:**
- Node.js
- Express.js

**Database:**
- MongoDB

---

## 📁 Project Structure
mern-todo-app/
│
├── client/ # Frontend (React)
├── server/ # Backend (Node + Express)
└── README.md

---

## ⚙️ Installation & Setup

### 1️⃣ Clone Repository
```bash
git clone https://github.com/Manisha2295/mern-todo-app.git
cd mern-todo-app

2️⃣ Install Dependencies
Backend:
cd server
npm install

Frontend:
cd client
npm install

▶️ Run the Project
Start Backend:
cd server
npm start

Start Frontend:
cd client
npm start

| Method | Endpoint   | Description   |
| ------ | ---------- | ------------- |
| GET    | /todos     | Get all tasks |
| POST   | /todos     | Add new task  |
| PUT    | /todos/:id | Update task   |
| DELETE | /todos/:id | Delete task   |
