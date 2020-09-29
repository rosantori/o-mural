import React, {useEffect, useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {FiPower, FiTrash2} from 'react-icons/fi';/*
import logoMural from '../../assets/mural.svg';*/

import api from '../../services/api';


import "./styles.css";

export default function Profile() {
    const [posts, setPosts] = useState([]);

    const history = useHistory();

    const user = localStorage.getItem('user');
    const userID = localStorage.getItem('userID');

    useEffect(()=>{
        api.get('profile', {
            headers: {
                Authorization: userID,
            }
        }).then(response=> {
            setPosts(response.data);
        })
    }, [userID]);

    async function handleDeletePost(id) {
        try {
            await api.delete(`/posts/${id}`, {
                headers: {
                    Authorization: userID
                }
            });
            setPosts(posts.filter(post => post.id !== id));
        }catch (err) {
            alert(`Erro ao deletar post. Tente novamente`)
        }
    }
    
    function handleLogout () {
        localStorage.clear();
        history.push('/');
    }

    return (
        <div className="profile-container">
            <header>
                <h1 id="logo">o MURAL</h1>
                <span>Bem vindo(a), {user }!</span>

                <Link to= "/posts/new" className="button">Nova Postagem</Link>
                <button onClick={handleLogout} className="button">
                    <FiPower size = {18} color = "#E020410" />
                </button>
            </header>
            <h1> Minhas postagens</h1>

            <ul id="post">
                {posts.map(post => (        
                    <li key={post.id}>
                        <strong>{post.title}</strong>
                        <pre>{post.description}</pre>
                        <button id = "del-btn" onClick={() => handleDeletePost(post.id)} type="button">
                            <FiTrash2 size = {20} color = "#a8a8b3"/>
                        </button>
                    </li>
                ))}
            </ul>

        </div>
    );
}