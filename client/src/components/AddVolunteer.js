import React from 'react';
import VolunteerForm from './VolunteerForm';
import { connect } from 'react-redux';


const AddVolunteer=(props)=>{
  return(
    <div>
    <VolunteerForm onSubmit={(volunteer)=>{
      props.history.push('/');
    }}
       status= "add"
     />
   </div>

);
};

export default connect()(AddVolunteer);