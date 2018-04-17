import React from 'react';
import VolunteerForm from './volunteer_form/VolunteerForm';
import { connect } from 'react-redux';
import {saveVolunteer} from "../actions";

const AddVolunteer=(props)=>{
  return(
    <div>
      <VolunteerForm saveVolunteer={props.saveVolunteer} />
   </div>

);
};

export default connect(null,{saveVolunteer})(AddVolunteer);
