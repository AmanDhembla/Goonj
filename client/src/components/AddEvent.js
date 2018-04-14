import React from 'react';
import EventForm from './EventForm';
import { connect } from 'react-redux';


const AddEvent=(props)=>{
  return(
    <div>
    <EventForm onSubmit={(event)=>{
      props.history.push('/');
    }}
       status= "add"
     />
   </div>

);
};

export default connect()(AddEvent);
