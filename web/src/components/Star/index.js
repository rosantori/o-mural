import React, { Component } from 'react';
import './styles.css';
import { FiStar} from 'react-icons/fi';

import api from '../../services/api';


class Star extends Component {
    constructor (props) {
        super(props);
        this.state = {
            isStarOn : this.props.toggle
        }
        this.handleClick = this.handleClick.bind(this);
    };

    async handleClick() {
        if(this.props.user_id) {
            await this.setState({
                isStarOn: !this.state.isStarOn
            });

            if(this.state.isStarOn) {
                try {
                    await api.post('stars', {user_id : this.props.user_id,
                         post_id : this.props.post_id});
                } catch (err) {
                    console.log("erro no post");
                    console.log(err);
                }
            } else {
                try {
                    await api.delete('stars', {data: {user_id : this.props.user_id,
                        post_id : this.props.post_id}});
                } catch (err) {
                    console.log("erro no delete");
                    console.log(err);
                }
            }
        } else {
            alert(`Please, login to favorite a post`);
        }
    };

    render() {
        return (
            <button id = "star" onClick = {(e)=>this.handleClick(e)}>
                <FiStar style = {this.state.isStarOn? {color: "red"} : {color : "black"}}/>
            </button>
        );
    }
}

export default Star;