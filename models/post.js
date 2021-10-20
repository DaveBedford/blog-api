const mongoose = require('mongoose');
const { Schema } = mongoose;

const PostSchema = new mongoose.Schema({
    author: [{ type: Schema.Types.ObjectId, ref: 'User', required: true }],
    title: { type: String, required: true },
    body: { type: String, required: true },
    description: { type: String, required: false },
    image: { type: String, required: false },
    featured: { type: Boolean, required: false },
    comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}],
    timestamp: { type: String, required: false },
});

const Post = mongoose.model('Post', PostSchema);

module.exports = Post;