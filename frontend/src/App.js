import React,{useState,useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import renderHTML from 'react-render-html';

import NavBar from './NavBar';
import {getUser,getToken} from './helpers';
import './App.css';


const App=()=> {

    const[posts,setPosts]=useState([])

    const getPosts=()=>{
        axios.get(`${process.env.REACT_APP_API}/posts`)
        .then(response=>{
            //console.log(response);
            setPosts(response.data);
        })
        .catch(error=>alert('Error has ocured while trying to get all the posts'));

    }
    useEffect(()=>{
        getPosts()

    },[]);

    const deletePostWarning=(slug)=> {
        let answer=window.confirm('Are you sure you want to delete this post?');
        if(answer){
            deletePost(slug);
        }
    };

    const deletePost=slug=> {
        axios
            .delete(`${process.env.REACT_APP_API}/post/${slug}`,
            {
                headers:{
                    authorization:`Bearer ${getToken()}`
                }
            })
            .then(response=>{
            alert(response.data.message)
            getPosts()
        }
    
        
        )
            .catch(error=>alert('Error has ocured while trying to delete the post'))
    };

    return(
        (
            <div className="container p-5">
                <NavBar/>
                <br/>
                <h1><img src="/images/BlogBigger.png" alt="" /></h1>
                
                <hr/>
                {
                    posts.map((post,i)=>(
                        <div  className="row bg-light text-dark" key={post._id} style={{borderBottom: '1px solid silver'}}>
                            <div className="col pt-3 pb-2">
                                <div className="row">
                                    <div className="col-md-10">
                                    <Link to={`/post/${post.slug}`}><h2>{post.title}</h2></Link>
                                    <div class="text-muted" className="lead pt-3">{renderHTML(post.content.substring(0,200))}</div>
                                    <p>Written by <span className="badge">{post.user}</span></p>
                                    <p>Published on{''}<span className="badge">{new Date(post.createdAt).toLocaleString()}</span></p>
                                    </div>

                                    {getUser() && (
                                        <div className="col-md-2">
                                        <button className="btn btn-small btn btn-primary">
                                        <Link to={`/post/update/${post.slug}`} style={{color: '#fff'}} >
                                        Update
                                        </Link>
                                        </button>
                                        <br/>
                                        <button
                                        onClick={()=>deletePostWarning(post.slug)} 
                                        className="btn btn-small btn btn-primary ml-1" 
                                        >Delete
                                        </button> 
                                        </div>
                                    )}

                                    </div>
                                </div>
                            </div>
                        
                    ))
                }
            </div>
            )
    );
};

export default App;
