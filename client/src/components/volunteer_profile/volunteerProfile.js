import React from 'react';
import { connect } from 'react-redux';
import VolunteerDetails from './volunteerDetails.js';
import VolLinkTab from './volLinkTab.js';
import { BrowserRouter, Switch, Route,Link,NavLink} from 'react-router-dom';
import AddEvent from '../AddEvent.js';
class VolunteerProfile extends React.Component{

  render(){

    return(
      <div>
        <VolunteerDetails volunteer={this.props.volunteer} auth={this.props.auth}/>
        <VolLinkTab />
        <h1>Events</h1>
        <Link to="/add_Event">
        <button className="button add-button">
        Add Events
      </button>
    </Link>
      </div>
    );
  }
}

const mapConnectToState = (state) => {
  console.log(state);
  return {
    volunteer: state.volunteer,
    auth: state.auth
  };
};

export default connect(mapConnectToState)(VolunteerProfile);
