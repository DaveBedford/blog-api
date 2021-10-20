const User = require('../models/user');
const Post = require('../models/post');
const Comment = require('../models/comment');



const index = (req, res) => {
	res.render('index', { title: 'Home Page' });
};



module.exports = {
	index,
	
};
