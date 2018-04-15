import React from 'react';
import AddUserForm from './details_form/AddUserForm';
import { connect } from 'react-redux';


const AddUser=(props)=>{
  return(
    <div>
    <AddUserForm onSubmit={(User)=>{
      props.history.push('/add_volunteer');
    }}
       status= "add"
     />
   </div>

);
};

export default connect()(AddUser);
