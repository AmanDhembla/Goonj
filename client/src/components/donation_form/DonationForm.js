import React,{Component} from 'react';
import '../../css/style.css';
import {reduxForm,Field} from 'redux-form';
import formField from './formField';
import selectField from './selectField';
import {withRouter} from 'react-router-dom';

export const FIELDS =[
  {
      name: "quantity",
      label: "Quantity"
  },
  {
      name: "pick_up_address",
      label: "Pick Up Address"
  }
];

class DonationForm extends React.Component{
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
        <form onSubmit={this.props.handleSubmit(()=>{})}>
          <Field type="text" name="type" component={selectField} label="Type"/>

          {this.renderFields()}
          <div>
        <label htmlFor="anonymous">Anonymous</label>
        <div>
          <Field
            name="anonymous"
            id="checkbox"
            component="input"
            type="checkbox"
          />
        </div>
      </div>
          <button className="btn-flat green right">Next<i className="material-icons right">done</i></button>
        </form>
      </div>
    )
  }
}

const validate=(values)=>{
  const errors={};
    if(!values.quantity){
        errors.quantity="you must provide the quantity";
    }
    if(!values.pick_up_address){
        errors.pick_up_address="you must provide the address";
    }
    if(!values.type){
        errors.type="you must provide a type";
    }
    return errors;
}

export default reduxForm({
  form: 'AddDonation',
  validate
})(withRouter(DonationForm));
