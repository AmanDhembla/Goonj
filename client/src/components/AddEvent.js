import React from 'react';
import EventForm from './events_form/EventForm';
import { connect } from 'react-redux';


const AddEvent=(props)=>{
  return(
    <div>
    <EventForm/>
   </div>

);
};

export default connect()(AddEvent);
