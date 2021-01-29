const express=require('express');

const router=express.Router();


const {create,list,read,update,remove}=require('../controllers/post');
const {requireLogin} =require('../controllers/auth');

router.post('/post',requireLogin, create);
router.get('/posts', list);
router.get('/post/:slug',read);
router.put('/post/:slug',requireLogin,update);
router.delete('/post/:slug',requireLogin,remove);

 

module.exports=router;
