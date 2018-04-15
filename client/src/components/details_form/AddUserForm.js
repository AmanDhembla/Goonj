import React,{Component} from 'react';
import '../../css/style.css';
import {reduxForm,Field} from 'redux-form';
import formField from './formField';
import selectField from './selectField';
import {withRouter} from 'react-router-dom';


export const FIELDS =[
  {
      name: "firstname",
      label: "Firstname"
  },
  {
      name:"lastname",
      label:"Lastname"
  },
  {
      name: "email", 
      label:"Email"
  }
];

class AddUser extends Component{
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
    console.log("yo yoscsjdbc ",this.props);
    return(
      <div className="container">
        <form onSubmit={this.props.handleSubmit((values)=>this.props.submitSurvey(values,this.props.history))}>
          {this.renderFields()}  
          <Field type="text" name="category" component={selectField} label="Category"/>     
          <button className="btn-flat green right">Next<i className="material-icons right">done</i></button>
        </form>
      </div>
    )
  }
}

const validate=(values)=>{
  const errors={};
    if(!values.firstname){
        errors.firstname="you must provide a firstname";
    }
    if(!values.lastname){
        errors.lastname="you must provide a lastname ";
    }
    if (!values.email) {
      errors.email = 'you must provide a email'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address'
    }
    if(!values.category){
        errors.category="you must select the category";
    }
    return errors;
}

export default reduxForm({
  form: 'AddUser',
  validate
})(withRouter(AddUser));