import React,{Component} from 'react';
import {connect} from 'react-redux';
import AddUser from './AddUser.js';
import Profile from './profile.js';
import AddVolunteer from './AddVolunteer';
import AddNgo from './AddNgo';
import {fetchNgo} from '../actions';

class Dashboard extends Component{
    renderContent(){
        switch(this.props.auth){
            case null:
                return;
            default:
                if(this.props.auth.firstname){
                    if(this.props.auth.volunteer && !this.props.auth.volunteerId){
                        console.log("here");
                        return(
                        <AddVolunteer />
                      );
                    }else if(this.props.auth.ngo && (!this.props.auth.ngoForm)){
                        console.log("here1");
                        return(
                            <AddNgo />
                          );
                    }else{
                        if(this.props.auth.ngo){
                            {this.props.fetchNgo()}
                        }else{

                        }
                    }
                }else{
                    return (
                        <AddUser />
                    );
                }
        }
     }
    render(){
        console.log(this.props.auth);
        return (
            <div>
                {this.renderContent()}
            </div>
        )
    }
}

const mapConnectToState=(state)=>{
    console.log(state);
    return {
        auth: state.auth,
    }
}

export default connect(mapConnectToState,{fetchNgo})(Dashboard);
