import React from 'react';
import DonationForm from './donation_form/DonationForm';
import { connect } from 'react-redux';
import {saveDonation} from '../actions';

const AddDonation=(props)=>{
  return(
    <div>
      <DonationForm saveDonation={props.saveDonation}/>
   </div>

);
};

export default connect(null,{saveDonation})(AddDonation);
