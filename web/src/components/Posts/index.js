import React, { Component} from 'react';
import './styles.css';

import Star from '../Star';
//import api from '../../services/api';
import {Link} from 'react-router-dom';

import {FiThumbsUp} from 'react-icons/fi';

class Posts extends Component {
    constructor(props)  {
        super(props);
    }

    render() {
        return(
            <li className = "post_component">
                <strong >{this.props.children.title}</strong>
                    <Star toggle = {this.props.children.starToggle} post_id = {this.props.children.id} user_id = {this.props.userID}/>
                <pre>{this.props.children.description}</pre>
                <div className="post-menu">
                    <Link  to="/">@{this.props.children.username}</Link>
                    <button id = "up" type = "button">
                        <FiThumbsUp/>
                    </button>
                </div>
            </li>
        );

    }
}


export default Posts;