import React , {Component} from 'react';
import './styles.css';
import avatar from '../../assets/avatar.png';
import {Link/*, useHistory*/} from 'react-router-dom';
//import { DefaultContext } from 'react-icons/lib/cjs';


export default class HeaderMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showMenu: false,
            showLog: 1
        }
        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);

    }

    showMenu(event) {
        event.preventDefault();

        this.setState({ showMenu:true }, ()=> {
            document.addEventListener('click', this.closeMenu);
        });
    }

    closeMenu(event) {
        if( this.dropdownMenu && !this.dropdownMenu.contains(event.target)) {
            this.setState({ showMenu:false}, ()=> {
                document.removeEventListener('click', this.closeMenu);
            });
            //this.setState({showLog: 0});
        }
        //console.log(this.state.showLog);
    }
    
    render() {

        function handleLogout () {
            localStorage.clear();
        }
        return(
            <div id = 'header-menu'>
                <button onClick = {this.showMenu} id='avatar-btn'>
                    <img id = "avatar" src={avatar} alt="Profile"/>
                </button>
                {
                this.state.showMenu ?
                    (<div className = "header-menu" ref = {(element) => {
                        this.dropdownMenu = element;
                        }}> 
                        {
                            this.props.user_id ? 
                            (<div>
                                <Link className='link' to='/profile'>Profile</Link>
                                <Link className='link'>Favorites</Link>
                                <Link className='link'onClick={handleLogout} to ='/'>LogOut</Link>
                            </div>
                            ) : 
                             (this.state.showLog===1) ?
                                (<div>
                                    <Link className='link' to="/logon">
                                        Login
                                        </Link>
                                    <Link className='link' to="/register">
                                        Register
                                        </Link>
                                </div>
                                ) : 
                                (
                                <div className= "link">HELLO!!</div>)  
                        }
                    </div>) : (null)
                }
            </div>
        );
    }

}

/* */