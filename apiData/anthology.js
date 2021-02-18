const compass=require('express').Router();

compass.route('/')
    .get()
    .post()

compass
    .route('/:id')
    .get()
    .put()
    .delete()
module.exports=compass;
