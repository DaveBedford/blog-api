const User = require('../models/user');
const Post = require('../models/post');
const Comment = require('../models/comment');
const utilities = require('../utilities/utilities');

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
const post = (req, res) => {
	const post = new Post({
		author: '617036f06117ea9ac73e36a6',
		title: req.body.title,
		body: req.body.body,
		description: req.body.description,
		image: req.body.image,
		featured: req.body.featured,
		timestamp: utilities.formatDate(new Date()),
	});

	post.save()
		.then((result) => {
			res.status(201).json(post);
		})
		.catch((err) => {
			res.status(400).json({ message: err.message });
		});
};

/*
|----------------------------------------------------------------------
| Update blog post
|----------------------------------------------------------------------
*/
const updatePost = async (req, res) => {
	try {
		// Get input
		const { title, body, description, image, featured } = req.body;

		console.log(title)
	
		// Query for the specific blog post and update with inputs
		const post = await Post.findByIdAndUpdate(req.params.id, { title, body, description, image, featured });
		if (!post) return res.status(404).json({ error: "Error updating post." });
		res.status(201).json({ message: "Successfully updated post." });
	  } catch (err) {
		console.log(err);
		return next(err);
	  }
	}


	// const post = await Post.findById(req.params.id);
	// if (req.body.title != null) {
	// 	post.title = req.body.title;
	//   }
	// if (req.body.body != null) {
	// 	post.title = req.body.body;
	//   }
	// if (req.body.description != null) {
	// 	post.title = req.body.description;
	//   }
	// if (req.body.image != null) {
	// 	post.title = req.body.image;
	//   }
	// if (reqbody.featured != null) {
	// 	post.title = req.body.featured;
	//   }

	//   try {
	// 	const updatedPost = await res.post.save()
	// 	res.json(updatedPost)
	//   } catch (err) {
	// 	res.status(400).json({ message: err.message })
	//   }
	// }

// MY CODE


	//console.log(req.params.id);
// 	console.log(req.body.title);

// 	const post = await Post.findById(req.params.id);
// 	try {
// 		post.title = req.body.title;
// 		post.body = req.body.body;
// 		post.description = req.body.description;
// 		post.image = req.body.image;
// 		post.featured = req.body.featured;

// 		// post.save()
// 		// .then((result) => {
// 		// 	res.status(201).json(post);
// 		// })
// 		// .catch((err) => {
// 		// 	res.status(400).json({ message: err.message });
// 		// });
// 	} catch(err) {
// 		res.status(400).json({ message: err.message });
// 	}
// };

/*
|----------------------------------------------------------------------
| Delete blog post
|----------------------------------------------------------------------
*/
const deletePost = (req, res) => {
	//const post = post.find((post) => post._id === req.params.id);

	
};

module.exports = {
	posts,
	getPostById,
	post,
	updatePost,
	deletePost
};
