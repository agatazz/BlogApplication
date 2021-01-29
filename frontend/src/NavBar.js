import React from 'react';
import {Link,withRouter} from 'react-router-dom';


import {logout,getUser} from './helpers';
//import './NavBar.css';

const NavBar=({history})=>(
    <nav class="navbar  navbar-expand-lg navbar-light bg-light">
        <ul className="nav nav-tabs " class="nav nav-pills" >
            <li className="nav-item pr-3 pt-3 pb-3">
                <Link to="/" style={{color: '#290d62'}}>Home</Link>
                
                
            </li>
            <br/>
            <li  className="nav-item pr-3 pt-3 pb-3">
            <Link to="/create" style={{color: '#290d62'}}>Add a blog post</Link>
            
                
            </li>
            {!getUser()&&(
                <li  className="nav-item ml-auto pr-3 pt-3 pb-3">
                <Link to="/login">Login</Link>
                    
                </li>
            )}
            {getUser()&&(
                <li  onClick={()=>logout(()=>history.push('/'))} className="nav-item ml-auto pr-3 pt-3 pb-3" style={{cursor: 'pointer'}}>
                Logout
                    
                </li>
            )}
            

        </ul>
        
    </nav>
    
);


export default withRouter(NavBar);