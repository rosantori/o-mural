import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';


import './styles.css';
import api from '../../services/api';

import muralImg from '../../assets/featherpen.png';
import {FiLogIn} from 'react-icons/fi';


export default function Logon() {
    const [id, setId] = useState('');
    const history = useHistory();

    async function handleLogon(e) {
        e.preventDefault();

        try {
            const response = await api.post('sessions', {id});
            localStorage.setItem('user',response.data.name);
            localStorage.setItem('userId', id);
            console.log(
                localStorage.getItem('user'),localStorage.getItem('userId')
            );

            history.push('/profile');
        } catch (err) {
            alert(`Falha no login, tente novamente`);
            history.push('/');
        }

    }
/*
    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="o Mural" className="src"/>
                <form onSubmit= {handleLogon}>
                    <h1>Faça seu logon</h1>
                    <input 
                        placeholder="Sua ID"
                        value = {id}
                        onChange={e => setId(e.target.value)}
                    />
                    <button type= "submit" className= "button" >Entrar</button>
                    <Link className="back-link" to="/register">

                        <FiLogIn size={16} color="c0c5ce"/>
                        Não tenho cadastro
                    </Link>
                </form>
            </section>
            <img src={muralImg}  alt="Mural" className="src"/>
        </div>
    );*/

    return (
        <div className="logon-container">
            <section className="form">
                <h1 id="logoprincipal">MURAL</h1>
                <form onSubmit= {handleLogon}>
                    <h1>Faça seu logon</h1>
                    <input 
                        placeholder="Sua ID"
                        value = {id}
                        onChange={e => setId(e.target.value)}
                    />
                    <button type= "submit" className= "button" >Entrar</button>
                    <Link className="back-link" to="/register">

                        <FiLogIn size={16}/>
                        Não tenho cadastro
                    </Link>
                </form>
            </section>
            <img src={muralImg}  alt="Mural" className="src"/>
        </div>
    );
}