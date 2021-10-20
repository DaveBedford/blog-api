const Item = require('../models/blogPosts');
const Category = require('../models/category');

const index = (req, res) => {
	
			res.render('index', { title: 'Home Page' });
		
};



module.exports = {
	index,
	
};
