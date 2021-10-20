// File to run in order to get data into database.Run this from node REPL

const mongoose = require('mongoose');
const Category = require('./models/category');
const Item = require('./models/item');

mongoose.connect('mongodb://localhost:27017/inventory', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Mongo connection open.")
    })
    .catch(err => {
        console.log("Mongo connection error.")
        console.log(err)
    })

// Seed starters

const newcat1 = new Category({
    title: 'Starters',
    description: 'A selection of smaller starter meals.',
    image: 'starters.jpg' 
});
  
newcat1.save();
  
const starter1 = new Item({
    name: 'Prawn Cocktail',
    description: 'Prawn cocktail with salad.',
    inStock: 14,
    price: 4.99,
    fileName: 'prawncocktail.jpg',
    category: newcat1._id    // assign the _id from the category
});
    starter1.save();

const starter2 = new Item({
    name: 'Scotch Egg',
    description: 'Egg in breadcrumbs.',
    inStock: 6,
    price: 3.99,
    fileName: 'scotchegg.jpg',
    category: newcat1._id    // assign the _id from the category
});
    starter2.save();

const starter3 = new Item({
    name: 'Soup',
    description: 'Soup of the day.',
    inStock: 122,
    price: 4.99,
    fileName: 'soup.jpg',
    category: newcat1._id    // assign the _id from the category
});
    starter3.save();

// Seed main meals

const newcat2 = new Category({
    title: 'Mains',
    description: 'A selection larger main meals.',
    image: 'mains.jpg' 
});
    newcat2.save();
  
const main1 = new Item({
    name: 'Fish And Chips',
    description: 'Haddock with breadcrumbs.',
    inStock: 4,
    price: 14.99,
    fileName: 'fishandchips.jpg',
    category: newcat2._id    // assign the _id from the category
});
    main1.save();

const main2 = new Item({
    name: 'Curry',
    description: 'Beef curry with rice.',
    inStock: 16,
    price: 13.99,
    fileName: 'curry.jpg',
    category: newcat2._id    // assign the _id from the category
});
    main2.save();

const main3 = new Item({
    name: 'Paella',
    description: 'Rice and fish with egg.',
    inStock: 12,
    price: 14.99,
    fileName: 'paella.jpg',
    category: newcat2._id    // assign the _id from the category
});
    main3.save();

// Seed desserts

const newcat3 = new Category({
    title: 'Desserts',
    description: 'A selection of desserts.',
    image: 'desserts.jpg' 
});
  
newcat3.save();
  
const dessert1 = new Item({
    name: 'Ice Cream',
    description: 'Various flavours of ice cream.',
    inStock: 45,
    price: 4.99,
    fileName: 'icecream.jpg',
    category: newcat3._id    // assign the _id from the category
});
    dessert1.save();

const dessert2 = new Item({
    name: 'Sticky Pudding',
    description: 'Sticky pudding dessert.',
    inStock: 2,
    price: 4.99,
    fileName: 'stickypudding.jpg',
    category: newcat3._id    // assign the _id from the category
});
    dessert2.save();

const dessert3 = new Item({
    name: 'Cake',
    description: 'Select from range of cakes. With cream.',
    inStock: 32,
    price: 6.99,
    fileName: 'cake.jpg',
    category: newcat3._id    // assign the _id from the category
});
    dessert3.save();
