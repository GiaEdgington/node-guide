const Product = require('../models/product');

exports.getProducts = (req, res, next) => {
    Product.fetchAll(products => {
        res.render('shop/product-list', 
        { prods: products, 
        pageTitle: 'All Products',
        path:'/product'
        });
    });
};

exports.getIndex = (req, res, next) => {
    Product.fetchAll(products => {
        res.render('shop/index', 
        { prods: products, 
        pageTitle: 'Shop',
        path:'/'
        });
    });
};

exports.getCart = (req, res, nect) => {
    res.render('shop/cart', {
        path: '/cart',
        pageTitle: 'Your cart'
    });
};

exports.getCheckout = (req, res, next) => {
    res.render('shop/checkout', {
       path: '/checkout',
       pageTitle: 'Checkout' 
    });
};