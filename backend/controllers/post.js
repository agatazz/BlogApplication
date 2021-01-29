const Post =require('../models/post');
const slugify=require('slugify');


exports.create=(req, res) => {
    
    //console.log(req.body);
    const {title,content,user}=req.body;
    const slug=slugify(title)
    switch(true) {
        case !title:
            return res.status(400).json({error:'Your post must include a title'});
            break;
        case !content:
            return res.status(400).json({error:'Your post must include content'});
            break;
    }

    Post.create({title,content,user,slug},(err,post) => {
        if(err){
            console.log(err);
            res.status(400).json({error:'This post already exists.Try something different'});
        }
        res.json(post);
    })

};

exports.list=(req, res) => {
    Post.find({})
    .sort({createdAt:-1})
    .exec((err,posts)=>{
        if(err) console.log(err)
            res.json(posts);

    });

};

exports.read=(req, res) => {
    const {slug} = req.params
    console.log(req.params.slug)
    Post.findOne({slug})
    .exec((err,post)=>{
        if(err) console.log(err)
            res.json(post);

    });

};

exports.update=(req,res)=>{
    const {slug} = req.params;
    const{title,content,user}=req.body;
    Post.findOneAndUpdate({slug},{title,content,user},{new:true}).exec((err,post)=>{
        if(err) console.log(err)
            res.json(post);
    });

}; 

exports.remove=(req, res) => {
    const {slug} = req.params;
    
    Post.findOneAndRemove({slug})
    .exec((err,post)=>{
        if(err) console.log(err)
            res.json({
                message:'Your post has been deleted'
            });

    });

};


