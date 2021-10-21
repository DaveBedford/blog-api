const User = require('../models/user');
const Post = require('../models/post');
const Comment = require('../models/comment');


/*
|----------------------------------------------------------------------
| GET all posts
|----------------------------------------------------------------------
*/
const posts = async (req, res) => {
	try {
		const posts = await Post.find();
		res.json(posts);
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
};

/*
|----------------------------------------------------------------------
| GET one post by ID ⚠ string
| Returning error, and console log error details.
|----------------------------------------------------------------------
*/
const getPostById = async (req, res) => {
	console.log(req.params.id);
	try {
		const post = await Post.findById(req.params.id);
		res.json(post);
	} catch (err) {
		res.status(500).json({ message: 'Could not find post.' });
		console.log(err);
	}
};









module.exports = {
	posts,
	getPostById,
};
