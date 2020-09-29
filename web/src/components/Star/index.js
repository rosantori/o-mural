import React, { Component } from 'react';
import { FiStar} from 'react-icons/fi';
import './styles.css';
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
            if(!this.state.isStarOn) {
                this.setState({
                    isStarOn: true
                })
                try {
                    await api.post('stars', {user_id : this.props.user_id,
                        post_id : this.props.post_id});
                    } catch (err) {
                        console.log("erro no post");
                        console.log(err);
                    }
                } else {
                this.setState({
                    isStarOn: false
                });
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
            <button id = "star_component" onClick = {(e)=>this.handleClick(e)}>
                <FiStar style = {this.props.user_id? (this.state.isStarOn? {color: "red"} : {color : "black"}) : {color:"black"}}/>
            </button>
        );
    }
}

export default Star;