import React from 'react';
import {reduxForm,Field} from 'redux-form';
import formField from './formField';
import {withRouter} from 'react-router-dom';

export const FIELDS =[
  {
      name: "acc_name",
      label: "Account Holder Name"
  },
  {
      name:"bank_name",
      label:"Bank Name"
  },
  {
      name: "branch_name",
      label:"Branch Name"
  },
  {
      name: "bank_acc_no",
      label:"Bank Account Number"
  },
  {
      name: "ifsc",
      label:"Ifsc Code"
  },
];
class Form3 extends React.Component{
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
    if(!values.acc_name){
        errors.acc_name="you must provide the name of the acount holder";
    }
    if(!values.bank_name){
        errors.bank_name="you must provide the name of the Bank";
    }

    if(!values.branch_name){
        errors.branch_name="you must provide the name of the branch";
    }
    if(!values.bank_acc_no){
        errors.bank_acc_no="you must provide the account number";
    }
    if(!values.ifsc){
        errors.ifsc="you must provide the ifsc code";
    }
    return errors;
}

export default reduxForm({
  form: 'Form3',
  validate
})(withRouter(Form3));
