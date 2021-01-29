import React,{useState,useEffect} from 'react';
import axios from 'axios';
import ReactQuill from 'react-quill';


import NavBar from './NavBar';
import 'react-quill/dist/quill.snow.css'
import {getToken} from './helpers';


const PostUpdate=(props)=>{

   

    const [state,setState]=useState({

        title:'',
      
        slug:'',
        user:''
    });

    const {title,slug,user}=state;

    const [content,setContent]=useState('');


    const contentHandler=(event)=>{
        console.log(event)
        setContent(event);

    };


   useEffect(()=>{
       axios.get(`${process.env.REACT_APP_API}/post/${props.match.params.slug}`)
       .then(response=>{
           const {title,content,slug,user}=response.data;
           setState({...state,title,slug,user});
           setContent(content);

       })
       .catch(error=>alert('App cannot load this post'));
   },[]);

   const changeHandler=name=>event=>{
    //console.log('name',name,'event',event.target.value);
    setState({...state,[name]:event.target.value});
};

const submitHandler=event=>{
    event.preventDefault();
    //console.table({title,content,user});
    axios.put(`${process.env.REACT_APP_API}/post/${slug}`,{title,content,user},
    {
        headers:{
            authorization:`Bearer ${getToken()}`
        }
    }
    )
    .then(response=>{
        console.log(response);
        const {title,content,slug,user}=response.data;

        setState({...state,title,content,slug,user});
        


        alert(`Post titled ${title} was updated to your blog`)

    })
    .catch(error=>{
        console.log(error.response);
        alert(error.response.data.error);
    });
};


   const showUpdateForm =()=>(
    <form onSubmit={submitHandler}>
    <div className="form-group">
      <label  className="text-muted">Title</label>
      <input value={title} type="text" onChange={changeHandler('title')} className="form-control" placeholder="Post title" required/>
    </div>
    <div className="form-group">
      <label className="text-muted">Content</label>
      <ReactQuill 
                  theme="snow" 
                  style={{border:'1px solid black'}} 
                  onChange={contentHandler} 
                  value={content}  
                  className="mb-3 pb-5" 
                  placeholder="Post content" 
                  required
                  />
      {/* <textarea onChange={changeHandler('content')} value={content} type="text" className="form-control" placeholder="Post content" required/> */}
    </div>
    <div className="form-group">
      <label className="text-muted">User</label>
      <input onChange={changeHandler('user')} value={user} type="text" className="form-control" placeholder="Author's name" required/>
    </div>
    <div>
        <button type="submit" className="btn btn-primary">Update</button>
    </div>
</form>
   )

   return(
    <div className="container p-5">
    <NavBar/>
    <br/>
    <h1><img src="/images/update.png" alt="" /></h1>

    {showUpdateForm()}
    
    
    

    
    </div>
   )

};

export default PostUpdate;