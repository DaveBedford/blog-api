const mongoose = require('mongoose');
const { Schema } = mongoose;

const itemSchema = new mongoose.Schema({
    name: { type: String, required: true, maxlength: 100 },
    description: { type: String, required: true, maxlength: 5000 },
    inStock: { type: Number, required: true, max: 9999, min: 0 },
    price: { type: Number, required: true, max: 999999, min: 0 },
    fileName: { type: String },
    category: [{ type: Schema.Types.ObjectId, ref: 'Category' }]
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;