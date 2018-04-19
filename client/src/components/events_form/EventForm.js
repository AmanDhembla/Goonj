import React,{Component} from 'react';
import '../../css/style.css';
import {reduxForm,Field} from 'redux-form';
import formField from './formField';
import {withRouter} from 'react-router-dom';

export const FIELDS =[
  {
      name: "name",
      label: "Event Name"
  },
  {
      name:"venue",
      label:"Event Venue"
  },
  {
      name: "date",
      label:"Date"
  },
  {
      name: "type",
      label:"Type"
  },
];

class EventForm extends React.Component{
  renderFields(){
    return(
      <div>
          {FIELDS.map((field)=>{
              return (<Field key={field.name} type="text" name={field.name} component={formField} label={field.label}/>);
          })}
      </div>
    )
  }
  render(){
    return(

      <div className="container">
        <form onSubmit={this.props.handleSubmit((values)=>this.props.saveEvent(values,this.props.history))}>
          {this.renderFields()}
          <button className="btn-flat green right">Next<i className="material-icons right">done</i></button>
        </form>
      </div>

    )
  }
}

const validate=(values)=>{
  const errors={};
    if(!values.name){
        errors.name="you must provide a name";
    }
    if(!values.venue){
        errors.venue="you must provide a venue";
    }
    if(!values.type){
        errors.type="you must provide a type";
    }
    return errors;
}

export default reduxForm({
  form: 'AddEvent',
  validate
})(withRouter(EventForm));
