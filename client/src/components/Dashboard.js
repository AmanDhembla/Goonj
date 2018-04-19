import React,{Component} from 'react';
import {connect} from 'react-redux';
import AddUser from './AddUser.js';
import AddVolunteer from './AddVolunteer';
import AddNgo from './AddNgo';
import {fetchNgo,fetchVolunteer} from '../actions';
import VolunteerProfile from './volunteer_profile/volunteerProfile.js'
class Dashboard extends Component{
    renderContent(){
        switch(this.props.auth){
            case null:
                return;
            default:
                if(this.props.auth.firstname){
                  console.log("first");
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
                      console.log(this.props.auth.ngo);
                        if(this.props.auth.ngo){
                            {this.props.fetchNgo()}
                        }else{
                          {this.props.fetchVolunteer()}
                          return(
                          <VolunteerProfile />
                        );
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

export default connect(mapConnectToState,{fetchNgo,fetchVolunteer})(Dashboard);
