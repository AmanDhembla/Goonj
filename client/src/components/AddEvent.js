import React from 'react';
import EventForm from './events_form/EventForm';
import { connect } from 'react-redux';
import {saveEvent} from "../actions";

const AddEvent=(props)=>{
  return(
    <div>
      <EventForm saveEvent={props.saveEvent} />
    </div>
  );
};

export default connect(null,{saveEvent})(AddEvent);
