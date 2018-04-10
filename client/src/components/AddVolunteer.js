import React from 'react';
import VolunteerForm from './VolunteerForm';
//import ExpenseForm from './ExpenseForm';

const AddVolunteer=(props)=>{
  return(
    <div className="container">
      <div className="register-form">
    <VolunteerForm onSubmit={(expense)=>{
      //props.history.push('/profile')
    }}/>
    <h1>hello volunteer</h1>
  </div>
</div>
);
};

export default AddVolunteer;
