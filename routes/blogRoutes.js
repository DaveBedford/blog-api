const express = require('express')
const router = express.Router()
const Comment = require('../models/comment')
const Post = require('../models/post')
const User = require('../models/user')
const utilities =  require('../utilities/utilities');

// Getting all
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find()
    res.json(posts)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

// Getting One
router.get('/:id', getPost, (req, res) => {
  res.json(res.post)
})

// Creating one - ORIGINAL
// router.post('/', async (req, res) => {
//   const subscriber = new Subscriber({
//     name: req.body.name,
//     subscribedToChannel: req.body.subscribedToChannel
//   })
//   try {
//     const newSubscriber = await subscriber.save()
//     res.status(201).json(newSubscriber)
//   } catch (err) {
//     res.status(400).json({ message: err.message })
//   }
// })

router.post('/', async (req, res) => {
  
  
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
    const newPost = await post.save()
    res.status(201).json(newPost)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

// Updating One
router.patch('/:id', getPost, async (req, res) => {
  if (req.body.name != null) {
    res.subscriber.name = req.body.name
  }
  if (req.body.subscribedToChannel != null) {
    res.subscriber.subscribedToChannel = req.body.subscribedToChannel
  }
  try {
    const updatedSubscriber = await res.subscriber.save()
    res.json(updatedSubscriber)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

// Deleting One
router.delete('/:id', getPost, async (req, res) => {
  try {
    await res.subscriber.remove()
    res.json({ message: 'Deleted Subscriber' })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

async function getPost(req, res, next) {
  let post
  try {
    post = await Post.findById(req.params.id)
    if (post == null) {
      return res.status(404).json({ message: 'Cannot find post.' })
    }
  } catch (err) {
    return res.status(500).json({ message: err.message })
  }

  res.post = post
  next()
}

module.exports = router