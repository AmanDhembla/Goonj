import React,{Component} from 'react';
import '../../css/style.css';
import {reduxForm,Field} from 'redux-form';
import formField from './formField';
import {withRouter} from 'react-router-dom';

export const FIELDS =[
  {
      name: "amount",
      label: "Amount"
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
    if(!values.amount){
        errors.amount="you must provide the amount";
    }
    return errors;
}

export default reduxForm({
  form: 'AddDonation',
  validate
})(withRouter(DonationForm));
