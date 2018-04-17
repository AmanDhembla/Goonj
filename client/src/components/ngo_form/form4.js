import React from 'react';
import {reduxForm,Field} from 'redux-form';
import formField from './formField';
import {withRouter} from 'react-router-dom';

export const FIELDS =[
  {
      name: "registration_number",
      label: "Registration Number"
  },
  {
      name:"identity_proof",
      label:"Identity Proof"
  },
  {
      name: "valid_from",
      label:"Valid From"
  },
  {
      name: "valid_to",
      label:"Valid To"
  }
];
class Form4 extends React.Component{
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
    if(!values.registration_number){
        errors.registration_number="you must provide the Registration number";
    }
    if(!values.identity_proof){
        errors.identity_proof="you must provide the Identity Proof";
    }

    if(!values.valid_from){
        errors.valid_from="you must provide the valid from date";
    }
    if(!values.valid_to){
        errors.valid_to="you must provide the valid to date";
    }

    return errors;
}

export default reduxForm({
  form: 'Form4',
  validate
})(withRouter(Form4));
