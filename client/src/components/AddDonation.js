import React from 'react';
import DonationForm from './donation_form/DonationForm';
import { connect } from 'react-redux';
import VolunteerDetails from './volunteer_profile/volunteerDetails.js';
import VolLinkTab from './volunteer_profile/volLinkTab.js';
import {saveDonation} from '../actions';

class AddDonation extends React.Component{
  render(){
  return(
    <div>
      <VolunteerDetails volunteer={this.props.volunteer} auth={this.props.auth}/>
      <VolLinkTab />
      <h1>Donations</h1>
      <DonationForm saveDonation={this.props.saveDonation}/>
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

export default connect(mapConnectToState,{saveDonation})(AddDonation);
