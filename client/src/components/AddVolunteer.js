import React from 'react';
import VolunteerForm from './volunteer_form/VolunteerForm';
import { connect } from 'react-redux';


const AddVolunteer=(props)=>{
  return(
    <div>
      <VolunteerForm />
   </div>

);
};

export default connect()(AddVolunteer);
