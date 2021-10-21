const User = require('../models/user');
const Post = require('../models/post');
const Comment = require('../models/comment');
const utilities =  require('../utilities/utilities');

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

/*
|----------------------------------------------------------------------
| Make blog post
|----------------------------------------------------------------------
*/
const post = async (req, res) => {
	
	console.log(req.body.title)

	const post = new Post({
		author: '617036f06117ea9ac73e36a6',
		title: req.body.title,
		body: req.body.body,
		description: req.body.description,
		image: req.body.image,
		featured: req.body.featured,
		timestamp: utilities.formatDate(new Date())
	});
	
	try {
		const newPost = await post.save();
		res.status(201).json(newPost);
	} catch (err) {
		res.status(400).json({ message: err.message });
	}
};







module.exports = {
	posts,
	getPostById,
	post
};
