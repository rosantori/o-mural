import React, {useEffect, useState} from 'react';
//import {Link} from 'react-router-dom';

import './styles.css';
import api from '../../services/api';

import Header from '../../components/Header';
import Posts from '../../components/Posts';

export default function Home() {   
    const [posts, setPosts] = useState([]);
    const userID = localStorage.getItem('userID');

    useEffect(()=>{
        api.get('posts', {
            headers: {
                Authorization: userID,
            }})
        .then(response=> {
            setPosts(response.data);
            console.log(posts)
        })

    });

    return (
        <div className="home-content">
            <Header/>
            <section className = "posts">
                <ul id = "post_area">
                    {posts.map((post) => <Posts key = {post.id} userID = {userID}>{post}</Posts>)}
                </ul>
            </section>
        </div>
    );
}