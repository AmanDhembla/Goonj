import React from 'react';
import { connect } from 'react-redux';
import EventForm from './events_form/EventForm';
import VolunteerDetails from './volunteer_profile/volunteerDetails.js';
import VolLinkTab from './volunteer_profile/volLinkTab.js';
import {saveEvent} from "../actions";

class AddEvent extends React.Component{
  render(){
  return(
    <div>
      <VolunteerDetails volunteer={this.props.volunteer} auth={this.props.auth}/>
      <VolLinkTab />
      <h1>Events</h1>
      <EventForm saveEvent={this.props.saveEvent} />
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

export default connect(mapConnectToState,{saveEvent})(AddEvent);
