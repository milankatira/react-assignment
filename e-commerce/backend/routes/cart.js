const router=require('express').Router();

const cart=require('../controller/cartController')

router.post('/cart',cart.cartitem)

router.get('/cart/product',cart.getproduct )

router.delete('/cart/product/:id',cart.deleteproduct)

module.exports=router;