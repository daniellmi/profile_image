Profile Image Upload with Node.js, PostgreSQL, and TypeScript

This project allows users to upload profile images to a server, with the images being stored in a PostgreSQL database. The backend is built using Node.js, Sequelize for database interaction, and Multer for handling image uploads. The frontend is simple HTML, JavaScript, and a TypeScript setup for type safety.

Project Structure
db.js
This file is responsible for establishing the connection between Sequelize and PostgreSQL. It sets up the connection to the database and ensures everything is properly configured for interacting with the database.

index.js
This is the main entry point for the server. It runs the Node.js server, sets up routes, middleware, and starts listening for incoming requests.

routes/
This folder contains the routes for handling HTTP requests. The main route here is a POST route for uploading images, which uses Multer to handle the file upload process.

models/
In this folder, you will find the Sequelize models, including the schema for the database. It defines the structure for storing the profile image data in the database.

client/
This folder contains the frontend files, including HTML and JavaScript. It allows users to interact with the server to upload profile images, providing a simple UI for the user.

src/
This folder is where the TypeScript files are located. The TypeScript setup ensures type safety and helps avoid errors in the backend code. It works seamlessly with the other backend files.

Technologies Used
Node.js: Server-side JavaScript runtime.
Express: Framework for building web applications.
Sequelize: ORM for PostgreSQL.
PostgreSQL: Relational database to store profile images.
Multer: Middleware for handling file uploads.
HTML/JS: Frontend for interacting with the server.
TypeScript: Type-safe language for writing the frontend logic.
