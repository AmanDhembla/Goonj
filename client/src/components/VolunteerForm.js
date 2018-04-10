import React from 'react';
import {Row,Input} from 'react-materialize';
export default class VolunteerForm extends React.Component{

  constructor(props){
    super(props);

    this.state={
      category: "Ngo",
      first_name: "",
      last_name: "",
      email: "",
      error: undefined,
    };
  }

  onCategoryChange=(e)=>{
    const category= e.target.value;
    this.setState(()=>({category}));

  }
  onFirst_nameChange=(e)=>{
    const first_name= e.target.value;
    this.setState(()=>({first_name}));
  }
  onLast_nameChange=(e)=>{
      const last_name=e.target.value;
      this.setState(()=>({last_name}));
  }
  onEmailChange=(e)=>{
    const email=e.target.value;
      this.setState(()=>({email}));
  }

  onSubmit=(e)=>{
    e.preventDefault();

    if(!this.state.first_name || !this.state.email || !this.state.category){
      this.setState(()=>({error: "Please provide all the options"}));
    }
    else{
      this.setState(()=>({error: undefined}));
      this.props.onSubmit({
        category: this.state.category,
        first_name: this.state.first_name,
        email: this.state.email,
        last_name: this.state.last_name

      });
    }
  };


  render(){
    return(
        <div>
        <h3 className="form-title">Enter your details</h3>
          {this.state.error && <p className="add-error"> {this.state.error}</p>  }
        <form onSubmit={this.onSubmit}>

          <div className="input-field">
          <input
            id="first Name"
            type="text"
            value={this.state.first_name}
            onChange={this.onFirst_nameChange}
          />
          <label htmlFor="first_name">First Name</label>
      </div>


        <div className="input-field">
            <input
            id="last_name"
            type="text"
            value={this.state.last_name}
            onChange={this.onLast_nameChange}
          />
          <label htmlFor="last_name">Last Name</label>
      </div>


        <div className="input-field">
            <input
            id="email"
            className="validate"
            type="email"
            value={this.state.email}
            onChange={this.onEmailChange}
          />
          <label htmlFor="email">Email</label>
      </div>
      <Row>
    <Input s={12} type='select'
         value={this.state.category}
         onChange={this.onCategoryChange}
         label="Materialize Select"
        >
      <option value='Ngo'>Ngo</option>
      <option value='Volunteer'>Volunteer</option>
    </Input>
  </Row>

    <div className="field-button">
            <button className="button form-button">
              Add User
            </button>
          </div>
        </form>
      </div>

    )
  }
}
