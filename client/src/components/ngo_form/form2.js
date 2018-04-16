import React from 'react';
import {reduxForm,Field} from 'redux-form';
import formField from './formField';

export const FIELDS =[
  {
      name: "house_no",
      label: "House Number"
  },
  {
      name:"street_name",
      label:"Street Name"
  },
  {
      name: "city",
      label:"City"
  },
  {
      name: "state",
      label:"State"
  },
  {
      name: "pincode",
      label:"pincode"
  }
];
class Form2 extends React.Component{
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
          {this.renderFields()}
          <button className="btn-flat green right">Next<i className="material-icons right">done</i></button>
        </form>
      </div>
    )
  }
}

const validate=(values)=>{
  const errors={};
    if(!values.city){
        errors.city="you must provide a city";
    }
    if(!values.state){
        errors.state="you must provide a state";
    }

    if(!values.pincode){
        errors.pincode="you must provide a pincode";
    }
  
    return errors;
}

export default reduxForm({
  form: 'Form2',
  validate
})(Form2);
