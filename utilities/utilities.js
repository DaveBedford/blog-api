const express = require('express');
const router = express.Router();

function formatDate (timestamp) {

    let date = new Date(timestamp);

    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October',	'November', 'December'];

    return months[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear();

}


module.exports = { 
    formatDate
    
}