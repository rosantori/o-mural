import React/*0, { Component, useEffect } */from 'react';
import './styles.css';
import logo from '../../assets/o_mural.svg';
import {Link} from 'react-router-dom';
import HeaderMenu from '../HeaderMenu';
/*
import avatar from '../../assets/avatar.png';

function avatarHandle() {
    const userID = localStorage.getItem('userID');
    if(userID) {

    }
}*/

export default function Header() {    
    var userID = localStorage.getItem('userID');

    return( 
    <div className="header">
        <Link to='/'>
            <img id = 'small-logo' src={logo} alt="o Mural"/>
        </Link>
        <div className="header-bar">
            {userID ? (<Link className='link' to='posts/new'>
                New Post
            </Link>) : (null)}
            <HeaderMenu user_id = {userID} />
        </div>
    </div>
    );

}
