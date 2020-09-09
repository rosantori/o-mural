import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';


import './styles.css';
import api from '../../services/api';

import muralImg from '../../assets/featherpen.png';
import logoMural from '../../assets/mural.svg';
import {FiLogIn} from 'react-icons/fi';


export default function Logon() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    async function handleLogon(e) {
        e.preventDefault();

        try {
            const response = await api.post('sessions', {username, password});
            localStorage.setItem('user',response.data.name);
            localStorage.setItem('userID', response.data.id);
            history.push('/');
        } catch (err) {
            alert(`Falha no login, tente novamente`);
            history.push('/');
        }

    }

    return (
        <div className="logon-container">
            <section className="form">
                <img id = "logoprincipal" src={logoMural} alt="o Mural"/>
                <form onSubmit= {handleLogon}>
                    <h1>Faça seu logon</h1>
                    <input 
                        placeholder="Username"
                        value = {username}
                        onChange={e => setUsername(e.target.value)}
                    />
                    <input
                        placeholder="Senha"
                        value = {password}
                        type = "password"
                        onChange={e => setPassword(e.target.value)}
                    />
                    <button type= "submit" className= "button" >Entrar</button>
                    <Link className="back-link" to="/register">
                        <FiLogIn size={16}/>
                        Não tenho cadastro
                    </Link>
                </form>
            </section>
            <img src={muralImg}  alt="Mural" className="muralImg"/>
        </div>
    );
}