import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';

import api from '../../services/api';


import "./styles.css";

export default function NewPost() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const history = useHistory();
    const userId = localStorage.getItem('userId');

    async function handleNewPost(e) {
        e.preventDefault();

        const data = {
            title, description
        };

        try {
            await api.post('posts', data, {
                headers: {
                    Authorization: userId,
                }
            });
            history.push('/profile');
        } catch (err){
            alert(`Erro ao enviar postagem!`);
        }
    }

    return (
        <div className="newpost-container">
            <div className="content">
                <section>
                    <h1 id="logo">o MURAL</h1>
                    <h1>Escrever nova postagem</h1>
                    <p>Crie seu texto, seja criativo. </p>
                    <Link className="back-link" to="/profile">

                        <FiArrowLeft size={16} color="c0c5ce"/>
                        Voltar para perfil
                    </Link>
                </section>
                <form onSubmit= {handleNewPost}>
                    <input placeholder= "Título"
                    value = {title}
                    onChange = {e => setTitle(e.target.value)}
                    />
                    <textarea placeholder="Texto" 
                    value = {description}
                    onChange = {e => setDescription(e.target.value)}
                    />
                    <button type="submit" className = "button"> Enviar </button>

                </form>
            </div>
        </div>
    );
}