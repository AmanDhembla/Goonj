import React from 'react';
import {reduxForm,Field} from 'redux-form';
import formField from './formField';

const FIELDS =[
  {
      name: "profession",
      label: "Profession"
  },
  {
      name:"city",
      label:"City"
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
    <div>
      <form onSubmit={this.props.handleSubmit(()=>{})}>
        {this.renderFields()}
        <button>Save</button>
      </form>
    </div>
  )
}
}

export default reduxForm({
  form: 'AddVolunteer'
})(VolunteerForm);
