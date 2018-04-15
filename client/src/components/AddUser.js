import React from 'react';
import AddUserForm from './details_form/AddUserForm';
import { connect } from 'react-redux';
import {submitSurvey} from "../actions";

const AddUser=(props)=>{
  console.log("here",props);
  return(
    <div>
    <AddUserForm submitSurvey={props.submitSurvey} />
   </div>

);
};

export default connect(null,{submitSurvey})(AddUser);
