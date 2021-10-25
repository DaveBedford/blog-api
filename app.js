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

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routes
app.use('/api', blogRoutes);





app.listen(process.env.PORT || 3000, () => {
	console.log('Listening on port 3000.');
});
