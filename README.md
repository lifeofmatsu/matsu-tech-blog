# Matsu Tech Blog

## Description

Matsu Tech Blog is a dynamic web application that allows developers to share their knowledge, post articles, and engage with the community by commenting on others' posts. This platform follows the Model-View-Controller (MVC) architecture, ensuring a separation of concerns and enhancing maintainability and scalability. Users can create an account, log in, post their own articles, edit them, or delete them, and comment on other users' posts.

## Features

- **User Authentication:** Sign up, log in, and log out capabilities to manage user sessions.
- **Blog Posting:** Users can create, edit, and delete their own blog posts.
- **Comments:** Users can comment on posts created by other users.
- **Responsive Design:** The blog is designed to be responsive, providing a seamless experience across various devices and screen sizes.

## Technologies Used

- **Node.js:** A JavaScript runtime built on Chrome's V8 JavaScript engine.
- **Express.js:** A web application framework for Node.js, designed for building web applications and APIs.
- **Sequelize:** A promise-based Node.js ORM for Postgres, MySQL, MariaDB, SQLite, and Microsoft SQL Server.
- **MySQL:** An open-source relational database management system.
- **Handlebars:** A minimal templating language used for generating the HTML views.
- **bcrypt:** A library to help hash passwords.
- **express-session:** A session middleware for Express.js, used to handle user sessions.
- **Bootstrap:** A front-end framework used for designing responsive and mobile-first websites.

## Installation

1. Clone the repository:
git clone https://github.com/your-username/matsu-tech-blog.git

css
Copy code
2. Navigate to the project directory:
cd matsu-tech-blog

markdown
Copy code
3. Install the necessary dependencies:
npm install

markdown
Copy code
4. Create a `.env` file in the root directory and add the following environment variables:
DB_NAME='techblog_db'
DB_USER='yourDatabaseUsername'
DB_PWD='yourDatabasePassword'
DB_SECRET='yourSessionSecret'

markdown
Copy code
5. Initialize the database:
mysql -u root -p
CREATE DATABASE techblog_db;
exit;

markdown
Copy code
6. Start the application:
npm start

markdown
Copy code
7. Visit `http://localhost:3001` in your browser to view the application.

## Usage

- **Home Page:** View all blog posts from various users.
- **Dashboard:** After logging in, visit your dashboard to create new posts or edit/delete your existing posts.
- **Commenting:** Comment on blog posts to engage with other users.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue to discuss potential changes or improvements.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
