import React,{useState,useEffect} from 'react';
import axios from 'axios';
import {Link,withRouter} from 'react-router-dom';


import NavBar from './NavBar';
import {authenticate,getUser} from'./helpers';


const LoginView=(props)=>{
    const[state,setState]=useState({
        name: '',
        password:''
    })

    const {name,password}=state;

    useEffect(()=>{
        getUser()&& props.history.push('/');
    },[]);

    const changeHandler=name=>event=>{
        //console.log('name',name,'event',event.target.value);
        setState({...state,[name]:event.target.value});
    };

    const submitHandler=event=>{
        event.preventDefault();
        console.table({name,password});
        //console.table({title,content,user});
        axios.post(`${process.env.REACT_APP_API}/login`,{name,password})
        .then(response=>{
            console.log(response);

            authenticate(response,()=>props.history.push('/create'))



            

        })
        .catch(error=>{
            console.log(error.response);
            alert(error.response.data.error);
        });
    };
    return(
        <div className="container pb-5">
            <NavBar/>
            <br/>
            <h1><img width="200px" height="200px" border="0" src="/images/Logo.png"  alt="" /></h1>
            <hr/>
            <form onSubmit={submitHandler}>
                    <div className="form-group">
                      <label  className="text-muted">Username</label>
                      <input value={name} type="text" onChange={changeHandler('name')} className="form-control" placeholder="Username" required/>
                    </div>
                    <div className="form-group">
                      <label className="text-muted">Password</label>
                      <input onChange={changeHandler('password')} value={password} type="password" className="form-control" placeholder="Password" required/>
                    </div>
                    <div>
                        <button type="submit" className="btn btn-primary">Login</button>
                    </div>
                </form>
    
    
        </div>
        );

    

};

export default withRouter(LoginView);