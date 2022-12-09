# tech-blog

## Description

The motivation of this project is to build a Content Management System (CMS) blog site, where developers can publish their blog posts and comments on other developer's posts as well. The application complies with the Model View Controller (MVC) architecture and performs RESTful CRUD operations. It uses Handlebars.js as the templating language, Sequelize as the Object Relational Mapper (ORM), and the express-session npm package for authentication. The application also includes login and logout features to store user session data as a cookie and uses the dotenv and bcrypt packages to support data/password protection. The application is deployed to Heroku per below link.

![](/screenshot.JPG)
Link to deployed application: https://guarded-depths-62551.herokuapp.com/

## Installation

The following tools were used for the development and testing of this project. Code development IDE (Microsoft VS Code) node.js (JavaScript runtime environment) npm (software registry containing mysql2, express, express-handlebars, express-session, bcrypt, dotenv and sequelize).

The following link gives the overview of JawsDB add-on required to provide a fully functional MySQL database server for use with Heroku: https://coding-boot-camp.github.io/full-stack/heroku/deploy-with-heroku-and-mysql

## Usage

For development: Use npm commands to install npm packages. Use MySQL commands to source the database. Use npm commands to seed data and run the server. Run the following npm command: 

$ heroku local web

The app should now be running on http://localhost:5000/.

## Credits

Georgia Tech Coding Bootcamp instructors, TA's, and other faculty.

## License

Not applicable