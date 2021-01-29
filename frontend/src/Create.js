import React,{useState} from 'react';
import axios from 'axios';
import ReactQuill from 'react-quill';



import 'react-quill/dist/quill.snow.css'
import NavBar from './NavBar';
import {getUser,getToken} from './helpers';
import './Create.css';

const Create=()=> {
    const [state,setState]=useState({
        title:'',
        
        user: getUser()
    });

    const [content,setContent]=useState('');


    const contentHandler=(event)=>{
        console.log(event)
        setContent(event);

    };

    const {title,user}=state;

    const changeHandler=name=>event=>{
        //console.log('name',name,'event',event.target.value);
        setState({...state,[name]:event.target.value});
    };

    const submitHandler=event=>{
        event.preventDefault();
        //console.table({title,content,user});
        axios.post(`${process.env.REACT_APP_API}/post`,{title,content,user},{
            headers:{
                authorization:`Bearer ${getToken()}`
            }
        })
        .then(response=>{
            console.log(response);

            setState({...state,title: '',user: ''});
            setContent('');

            alert(`Post titled ${response.data.title} was added to your blog`)

        })
        .catch(error=>{
            console.log(error.response);
            alert(error.response.data.error);
        });
    };

    return(
        (
            <div className="container p-5">
                <NavBar/>
                <br/>
            <h1><img src="/images/create.png" alt="" /></h1>
            <br/>
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
                <div >
                <br/>
                <button type="submit" className="btn btn-primary">Add post</button>
                </div>
            </form>
            </div>
            )
    )
}

export default Create;