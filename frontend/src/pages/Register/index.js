import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';

import api from '../../services/api';
import './styles.css';

import logoImg from '../../assets/logo2.png';

export default function Register() {
    const [name, setName] = useState(''); //O '' é para iniciar com valor vazio, string vazia
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [country, setCountry ] = useState('');

    const history = useHistory();

    async function handleRegister(e) {
        e.preventDefault();
        const data = {name, email, username, country};

        try{
            const response = await api.post('users', data);
            alert(`Seu ID de acesso: ${response.data.id}`);
            history.push('/');
        } catch (err) {
            alert(`Erro no cadastro, tente novamente`);
        }
    }
    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="o Mural" className="src"/>
                    <h1>Cadastro</h1>
                    <p>Faça o seu cadastro e compartilhe suas histórias</p>
                    <Link className="back-link" to="/">

                        <FiArrowLeft size={16} color="c0c5ce"/>
                        Voltar
                    </Link>
                </section>
                <form onSubmit = {handleRegister}>
                    <input 
                        placeholder= "Nome do Usuário"
                        value={name}
                        onChange = { e=> setName(e.target.value)}
                        />
                    <input type = "email" pĺaceholder= "Email"
                        value={email}
                        onChange = { e=> setEmail(e.target.value) }
                        />
                    <div className="group">
                        <input 
                            placeholder = "Username" 
                            style={{width : 200}}
                            value={username}
                            onChange = { e=> setUsername(e.target.value)}
                            />
                        <input 
                            className="Country"
                            value={country}
                            onChange = { e=> setCountry(e.target.value)}
                            />
                    </div>
                    <button type="submit" className = "button"> Cadastrar </button>

                </form>
            </div>
        </div>
    );
}