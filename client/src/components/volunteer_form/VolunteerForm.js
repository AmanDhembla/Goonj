import React from 'react';
import {reduxForm,Field} from 'redux-form';
import formField from './formField';
import selectField from './selectField';

const FIELDS =[
  {
      name: "profession",
      label: "Profession"
  },
  {
      name:"city",
      label:"City"
  },
  {
      name:"contact",
      label:"Contact"
  },
  {
      name:"hobbies",
      label:"Hobbies"
  },
  {
      name:"experience",
      label:"Experience"
  }
];


class VolunteerForm extends React.Component{
//contact,profession,city,hobbies,experience,dob,gender
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
        <Field type="text" name="gender" component={selectField} label="gender"/>
        <button className="btn-flat green right">Next<i className="material-icons right">done</i></button>
      </form>
    </div>
  )
}
}

const validate=(values)=>{
  const errors={};
    if(!values.contact){
        errors.contact="you must provide a Contact number";
    }
    if(!values.profession){
        errors.profession="you must provide a profession";
    }

    if(!values.city){
        errors.city="you must provide a city";
    }
    return errors;
}

export default reduxForm({
  form: 'AddVolunteer',
  validate
})(VolunteerForm);
