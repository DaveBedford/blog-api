const express = require('express');
const app = express();
const path = require('path');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes');

dotenv.config();

mongoose
	.connect(process.env.DB_HOST, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => {
		console.log('Mongo connection open.');
	})
	.catch((err) => {
		console.log('Mongo connection error.');
		console.log(err);
	});

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/', blogRoutes);




app.listen(process.env.PORT || 3000, () => {
	console.log('Listening on port 3000.');
});
