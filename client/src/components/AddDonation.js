import React from 'react';
import DonationForm from './DonationForm';
import { connect } from 'react-redux';


const AddDonation=(props)=>{
  return(
    <div>
    <DonationForm onSubmit={(event)=>{
      props.history.push('/');
    }}
       status= "add"
     />
   </div>

);
};

export default connect()(AddDonation);
