import React from 'react';
import DonationForm from './donation_form/DonationForm';
import { connect } from 'react-redux';


const AddDonation=(props)=>{
  return(
    <div>
    <DonationForm/>
   </div>

);
};

export default connect()(AddDonation);
