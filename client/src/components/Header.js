import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import Search from './search_form/Search';
import {search} from '../actions';

class Header extends Component{
    renderContent(){
        switch(this.props.auth){
            case null:
                return;
            case false:
                return (
                    <li><a href="/auth/google">Login With Google</a></li>
                );
            default:
            console.log(this.props.auth);
                return (
                    <li><a href="/api/user/logout">Logout</a></li>
                );
        }
    }
    render(){
        return(
            <nav>
                <div className="nav-wrapper">
                <Link to={this.props.auth?"/profile":"/"} className="brand-logo">Goonj</Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    {this.renderContent()}
                </ul>
                {(this.props.auth && (this.props.auth.volunteerId||this.props.auth.ngoForm))?<Search search={this.props.search}/>:""}
                </div>
            </nav>
        )
    }
}

const mapConnectToState=(state)=>{
    return {
        auth: state.auth,
    }
}

export default connect(mapConnectToState,{search})(Header);
