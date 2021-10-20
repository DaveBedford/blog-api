const User = require('../models/user');
const Post = require('../models/post');
const Comment = require('../models/comment');



const posts = (req, res) => {
	
	Post.find()
		.then((result) => {
			res.send(result);
		})
		.catch((err) => {
			console.log(err);
		});
	
};

const getPostById = (req, res) => {
	console.log(req.body.id);
	Post.findById(req.body.id)
		.then((result) => {
			res.send(result);
		})
		.catch((err) => {
			console.log(err);
		});
	
};



module.exports = {
	posts,
	getPostById
	
};
