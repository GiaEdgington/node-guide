const path = require('path');

const express = require('express');

const rootDir = require('../utils/path');

const router = express.Router();

const adminData = require('./admin');

router.get('/', (req, res, next) => {
    //console.log(adminData.products);
    //res.sendFile(path.join(rootDir, 'views', 'shop.html'));
    res.render('shop');
});

module.exports = router;

