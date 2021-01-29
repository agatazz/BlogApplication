import React,{useState,useEffect} from 'react';
import axios from 'axios';
import renderHTML from'react-render-html';

import NavBar from './NavBar';


const PostView=(props)=>{

   const[post,setPost]=useState('')


   useEffect(()=>{
       axios.get(`${process.env.REACT_APP_API}/post/${props.match.params.slug}`)
       .then(response=>setPost(response.data))
       .catch(error=>alert('App cannot load this post'));
   },[]);

   const showPostView=()=>(
        <div className="row">
            <div className="col-md-8 pb-2 offset-md-2  pt-3">
            <h1 style={{color: '#ff66c4'}}>{post.title}</h1>
            <div  className="lead pt-3 ">{renderHTML(post.content)}</div>
            <p className="row bg-light text-dark">
                Written by <span className="badge">{post.user}</span>
                </p>
            <p className="row bg-light text-dark">Published on{''}<span className="badge">{new Date(post.createdAt).toLocaleString()}</span></p>
            </div>

        </div>

   )

   return(
    <div className="container p-5">
    <NavBar/>
    <h1><img src="/images/post.png" alt="" /><img src="/images/post.png" alt="" /></h1>
    {post&& showPostView()}
    </div>
   )

};

export default PostView;