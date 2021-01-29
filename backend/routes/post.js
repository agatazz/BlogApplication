const express=require('express');

const router=express.Router();


const {create,list,read,update,remove}=require('../controllers/post');
//const {requireLogin} =require('../controllers/auth');

router.post('/post', create);
router.get('/posts', list);
router.get('/post/:slug',read);
router.put('/post/:slug',update);
router.delete('/post/:slug',remove);

// router.get('/secret',requireLogin,(req,res) =>{
//     res.json({
//         data:req.user.name
//     });
// });

module.exports=router;