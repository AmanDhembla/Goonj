import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

class Header extends Component{
    renderContent(){
        switch(this.props.auth){
            case null:
                return;
            case false:
                return (
                    <li><a href="/auth/google">Login With Google</a></li>
                )
            default:
                return (
                    <li><a href="/api/user/logout">Logout</a></li>
                )
        }
    }
    render(){
        return(
            <nav>
                <div className="nav-wrapper">
                <a href="/" className="brand-logo">Goonj</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    {this.renderContent()}
                </ul>
                </div>
            </nav>
        )
    }
}

export default connect((state,props)=>{
    return {
        auth: state.auth
    }
})(Header);