import React from 'react';
import {reduxForm,Field} from 'redux-form';
import formField from './formField';
import {withRouter} from 'react-router-dom';

export const FIELDS =[
  {
      name: "name_head",
      label: "Head of organization"
  },
  {
      name:"name_ngo",
      label:"Name of Ngo"
  },
  {
      name: "email",
      label:"Email"
  },
  {
      name: "contact",
      label:"Contact"
  }
];

class Form1 extends React.Component{
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
        <form onSubmit={this.props.handleSubmit((values)=>{
            this.props.saveNgo(values,this.props.history);
            this.props.onStateChange();
          })}>
          {this.renderFields()}
          <button className="btn-flat green right">Next<i className="material-icons right">done</i></button>
        </form>
      </div>
    )
  }
}

const validate=(values)=>{
  const errors={};
    if(!values.name_head){
        errors.name_head="you must provide the name of the head";
    }
    if(!values.name_ngo){
        errors.name_ngo="you must provide the name of the Ngo";
    }

    if(!values.contact){
        errors.contact="you must provide a contact number";
    }
    if (!values.email) {
      errors.email = 'you must provide a email'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address'
    }
    return errors;
}

export default reduxForm({
  form: 'Form1',
  validate
})(withRouter(Form1));
