Dudas Lanches API

Description: Dudas Lanches API is an application developed to manage orders in a snack bar. The API has endpoints for creating, reading, updating, and deleting users, products, and orders. Additionally, the API features user authentication and JWT token generation to access application features.

The project was developed using the MVC (Model-View-Controller) architectural pattern, which allows for separating the responsibilities of the different parts of the application. The Model layer represents the data models used by the application, the View layer is responsible for presenting data to the user, and the Controller layer is responsible for processing HTTP requests and manipulating model data.

For data persistence, PostgreSQL was used as the open-source relational database commonly used in web applications. Access to the database was done through the ORM (Object-Relational Mapping) Sequelize, which allows for working with relational databases more intuitively and facilitates data manipulation.

In addition to PostgreSQL, MongoDB was also used as a non-relational database to store user and order information. Access to the database was done through the Mongoose ORM, which allows for working with non-relational databases more simply and intuitively.

Technologies Used

The following are the main technologies used in building the application:

Node.js: JavaScript runtime environment that allows for executing server-side JavaScript code; 

Express: web application framework for Node.js that allows for creating routes and endpoints simply and intuitively; 

Nodemon: utility that allows for automatically restarting the application whenever there is a change in the source code; 

ESLint: tool to identify and report suspicious code patterns in JavaScript; 

Prettier: code formatting tool that helps maintain code style consistency; 

Docker: containerization platform that allows for creating isolated development environments; 

PostgreSQL: open-source relational database; 

Sequelize: Node.js ORM that allows for working with relational databases more intuitively; 

Postbird: desktop client for PostgreSQL that allows for visualizing and manipulating the database graphically; 

Insomnia: REST client for testing and debugging API endpoints; 

Multer: middleware for handling form data and file uploads in HTTP requests; 

Bcrypt: library for encrypting user passwords; UUID: library for generating universally unique identifiers; 

JWT: library for generating authentication tokens for users; 

Yup: data validation library for JavaScript; 

MongoDB: open-source non-relational database; 

Mongoose: Node.js ORM that allows for working with non-relational databases more simply and intuitively; 

MongoDB Compass: desktop client for MongoDB that allows for visualizing and manipulating the database graphically.
