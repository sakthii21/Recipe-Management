Recipe-Management

This project uses React + Vite.

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh



🥘 Recipe Management App

A web application that allows users to create, edit, organize, and share their favorite recipes with ease. Built with the MERN stack, it features user authentication, recipe filtering, image uploads, and a responsive design.

 🚀 Features

- 🧑‍🍳 Add / Edit / Delete Recipes
- 🔍 Search and Filter by Category, Ingredients, or Title
- 📸 Image Upload Support for Recipes
- ❤️ Favorite Recipes List
- 👤 User Authentication (JWT-based)
- 🌐 Responsive Design for All Devices
- 🛡️ Role-based Access (Admin/User)

 🛠️ Tech Stack

Frontend:

- React.js
- React Router
- Axios
- Tailwind CSS 

Backend:

- Node.js
- Express.js
- MongoDB (with Mongoose)
- JWT for Auth
- Multer (for image upload)

 📦 Installation

 1. Clone the repository
    
git clone https://github.com/yourusername/recipe-app.git

cd recipe-app

Backend Setup

cd backend

npm install

Create a .env file in the backend/ directory:

PORT=5000

MONGO_URI=your_mongo_db_connection_string

JWT_SECRET=your_secret_key

Start the backend server:

npm run dev


3. Frontend Setup:
   
cd frontend

npm install

npm start



