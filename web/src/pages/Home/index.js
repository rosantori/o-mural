import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {FiPower, FiThumbsUp,FiLogIn} from 'react-icons/fi';


import './styles.css';
import api from '../../services/api';

import logoMural from '../../assets/o_mural.svg';
import Star from '../../components/Star';

export default function Home() {

    const [posts, setPosts] = useState([]);
    const userID = localStorage.getItem('userID');

    useEffect(()=>{
        api.get('posts')
        .then(response=> {
            setPosts(response.data);
        })
    });

    function handleLogout () {
        localStorage.clear();
    }

    return (
        <div className="home-container">
            <section className="menu">
                <img id = "logoMural" src={logoMural} alt="o Mural"/>
                <div id = "loggedout" style = {{display : userID? "none" : "block"}} >
                    <Link className="menu-link" to="/register"> Register</Link>
                    <Link className="menu-link" style={{"paddingTop":"4px"}} to="/logon"><FiLogIn/></Link>
                </div>
                <div id = "loggedin" style = {{display : userID? "block" : "none"}}>
                    <Link className="menu-link" to="/posts/new">New Post</Link>
                    <Link onClick={handleLogout} className="menu-link" style={{"paddingTop":"4px"}} to ='/'><FiPower/></Link>
                </div>
            </section>
            <section className="posts">
                <ul id = "post">
                    {posts.map(post => (        
                        <li key={post.id}>
                            <strong>{post.title}</strong>
                            <pre>{post.description}</pre>
                            <div className="post-menu">
                                <Star toggle="false" post_id = {post.id} user_id = {userID}/>
                                <Link  to="/">@{post.username}</Link>
                                <button id = "up" type = "button">
                                    <FiThumbsUp/>
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
}