import React from 'react';
import { connect } from 'react-redux';

const VolunteerDetails=(props)=>{
  return(
    <div>
      <h6>name: {props.auth.firstname} email: {props.auth.email}</h6>
    </div>
  )
};

export default VolunteerDetails;
