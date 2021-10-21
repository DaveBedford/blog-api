// File to run in order to get data into database.Run this from node REPL

const mongoose = require('mongoose');
const utilities =  require('./utilities/utilities');
//const bcrypt = require('bcrypt');
const User = require('./models/user');
const Post = require('./models/post');
const Comment = require('./models/comment');


mongoose.connect('mongodb://localhost:27017/blog-api', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Mongo connection open.")
    })
    .catch(err => {
        console.log("Mongo connection error.")
        console.log(err)
    })

// Add Admin User
// const myPlaintextPassword = 'password';
// bcrypt.hash(myPlaintextPassword, 10).then(function(hash) {
//     const newuser1 = new User({
//         username: 'admin',
//         password: hash,
//         admin: true 
//     });
//     newuser1.save(); 
// });

// Add User
// const myPlaintextPassword = 'password';
// bcrypt.hash(myPlaintextPassword, 10).then(function(hash) {
//     const newuser1 = new User({
//         username: 'user',
//         password: hash,
//         admin: false 
//     });
//     newuser1.save(); 
//     console.log('New entry added.');
// });


// Seed posts
// const newpost = new Post({
//     author: '61706b8f5f4e417b791886c3',
//     title: 'Bcrypt',
//     body: 'As should be the case with any security tool, this library should be scrutinized by anyone using it. If you find or suspect an issue with the code, please bring it to my attention and I will spend some time trying to make sure that this tool is as secure as possible. To make it easier for people using this tool to analyze what has been surveyed, here is a list of BCrypt related security issues/concerns as they have come up.',
//     description: 'The Bcrypt Library',
//     image: 'https://avatars2.githubusercontent.com/u/1019381?s=400&v=4',
//     featured: true,
//     comments: null,
//     timestamp: utilities.formatDate(new Date())
// });
  
// newpost.save();

// const newpost = new Post({
//     author: '617036f06117ea9ac73e36a6',
//     title: 'Passport',
//     body: 'Passport is authentication middleware for Node.js. Extremely flexible and modular, Passport can be unobtrusively dropped in to any Express-based web application. A comprehensive set of strategies support authentication using a username and password, Facebook, Twitter, and more.',
//     description: 'The Passport Library',
//     image: 'https://miro.medium.com/max/400/1*YI1tt4kGzvea-v4dAhZ90w.png',
//     featured: false,
//     comments: null,
//     timestamp: utilities.formatDate(new Date())
// });
  
// newpost.save();


// Seed comments
/*
admin id: 617036f06117ea9ac73e36a6
user id: 61706b8f5f4e417b791886c3

post 1 id: 61706fd3b003f2231942b39d
post 2 id: 6170709513e5302b5b6bc97a
*/

// const newcomment = new Comment({
//     author: '617036f06117ea9ac73e36a6',
//     post: '61706fd3b003f2231942b39d',
//     text: 'This is really great stuff man.',
//     timestamp: utilities.formatDate(new Date())
// });

// newcomment.save();

// const newcomment = new Comment({
//     author: '61706b8f5f4e417b791886c3',
//     post: '61706fd3b003f2231942b39d',
//     text: 'Lol cool story bro.',
//     timestamp: utilities.formatDate(new Date())
// });

// newcomment.save();

// const newcomment = new Comment({
//     author: '61706b8f5f4e417b791886c3',
//     post: '6170709513e5302b5b6bc97a',
//     text: 'The best thing I have never read!',
//     timestamp: utilities.formatDate(new Date())
// });

// newcomment.save();

// const newcomment = new Comment({
//     author: '617036f06117ea9ac73e36a6',
//     post: '6170709513e5302b5b6bc97a',
//     text: 'What a great time to be alive!',
//     timestamp: utilities.formatDate(new Date())
// });

// newcomment.save();














































// // Seed starters

// const newcat1 = new Category({
//     title: 'Starters',
//     description: 'A selection of smaller starter meals.',
//     image: 'starters.jpg' 
// });
  
// newcat1.save();
  
// const starter1 = new Item({
//     name: 'Prawn Cocktail',
//     description: 'Prawn cocktail with salad.',
//     inStock: 14,
//     price: 4.99,
//     fileName: 'prawncocktail.jpg',
//     category: newcat1._id    // assign the _id from the category
// });
//     starter1.save();

// const starter2 = new Item({
//     name: 'Scotch Egg',
//     description: 'Egg in breadcrumbs.',
//     inStock: 6,
//     price: 3.99,
//     fileName: 'scotchegg.jpg',
//     category: newcat1._id    // assign the _id from the category
// });
//     starter2.save();

// const starter3 = new Item({
//     name: 'Soup',
//     description: 'Soup of the day.',
//     inStock: 122,
//     price: 4.99,
//     fileName: 'soup.jpg',
//     category: newcat1._id    // assign the _id from the category
// });
//     starter3.save();

// // Seed main meals

// const newcat2 = new Category({
//     title: 'Mains',
//     description: 'A selection larger main meals.',
//     image: 'mains.jpg' 
// });
//     newcat2.save();
  
// const main1 = new Item({
//     name: 'Fish And Chips',
//     description: 'Haddock with breadcrumbs.',
//     inStock: 4,
//     price: 14.99,
//     fileName: 'fishandchips.jpg',
//     category: newcat2._id    // assign the _id from the category
// });
//     main1.save();

// const main2 = new Item({
//     name: 'Curry',
//     description: 'Beef curry with rice.',
//     inStock: 16,
//     price: 13.99,
//     fileName: 'curry.jpg',
//     category: newcat2._id    // assign the _id from the category
// });
//     main2.save();

// const main3 = new Item({
//     name: 'Paella',
//     description: 'Rice and fish with egg.',
//     inStock: 12,
//     price: 14.99,
//     fileName: 'paella.jpg',
//     category: newcat2._id    // assign the _id from the category
// });
//     main3.save();

// // Seed desserts

// const newcat3 = new Category({
//     title: 'Desserts',
//     description: 'A selection of desserts.',
//     image: 'desserts.jpg' 
// });
  
// newcat3.save();
  
// const dessert1 = new Item({
//     name: 'Ice Cream',
//     description: 'Various flavours of ice cream.',
//     inStock: 45,
//     price: 4.99,
//     fileName: 'icecream.jpg',
//     category: newcat3._id    // assign the _id from the category
// });
//     dessert1.save();

// const dessert2 = new Item({
//     name: 'Sticky Pudding',
//     description: 'Sticky pudding dessert.',
//     inStock: 2,
//     price: 4.99,
//     fileName: 'stickypudding.jpg',
//     category: newcat3._id    // assign the _id from the category
// });
//     dessert2.save();

// const dessert3 = new Item({
//     name: 'Cake',
//     description: 'Select from range of cakes. With cream.',
//     inStock: 32,
//     price: 6.99,
//     fileName: 'cake.jpg',
//     category: newcat3._id    // assign the _id from the category
// });
//     dessert3.save();
