const mongoose = require('mongoose');
const { Schema } = mongoose;

const CommentSchema = new mongoose.Schema({
    author: [{type: Schema.Types.ObjectId, ref: 'User', required: true}],
    post: [{type: Schema.Types.ObjectId, ref: 'Post', required: true}],
    text: { type: String, required: true },
    timestamp: {type: String, required: false}
});

const Comment = mongoose.model('Comment', CommentSchema);

module.exports = Comment;