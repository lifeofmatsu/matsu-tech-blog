const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sequelize = require('./config/config');
const helpers = require('./utils/helpers'); // If you have helper functions for Handlebars

const { homeRoutes, apiRoutes } = require('./routes'); // Aggregated route imports


const app = express();
const PORT = process.env.PORT || 3001;

// Session configuration
const sessionStore = {
	secret: process.env.DB_SECRET,
	cookie: {},
	resave: false,
	saveUninitialized: true,
	store: new SequelizeStore({
		db: sequelize
	})
};

app.use(session(sessionStore));

// Handlebars setup with optional helpers
const hbs = exphbs.create({ helpers });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Use the aggregated routes from the routes directory
app.use('/', homeRoutes);
app.use('/api', apiRoutes); // User, post, and comment routes

// Sync sequelize models to the database, then start the server
sequelize.sync({ force: false }).then(() => {
	app.listen(PORT, () => console.log(`Now listening on port ${PORT}`));
});
