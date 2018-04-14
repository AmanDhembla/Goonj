import React from 'react';
export default class Form1 extends React.Component{

  constructor(props){
    super(props);

    this.state={
      name_head: "",
      name_ngo: "",
      email: "",
      contact: "",
      error: undefined
    };
  }

  onContactChange=(e)=>{
    const contact= e.target.value;
    this.setState(()=>({contact}));

  }
  onName_headChange=(e)=>{
    const name_head= e.target.value;
    this.setState(()=>({name_head}));
  }
  onName_ngoChange=(e)=>{
      const name_ngo=e.target.value;
      this.setState(()=>({name_ngo}));
  }
  onEmailChange=(e)=>{
    const email=e.target.value;
      this.setState(()=>({email}));
  }

  onSubmit=(e)=>{
    e.preventDefault();

    if(!this.state.name_ngo || !this.state.email || !this.state.name_head|| !this.state.contact){
      this.setState(()=>({error: "Please provide all the options"}));
    }
    else{
      this.setState(()=>({error: undefined}));
      this.props.onSubmit({
        contact: this.state.contact,
        name_head: this.state.name_head,
        email: this.state.email,
        name_ngo: this.state.name_ngo

      });
    }
  };


  render(){
    return(
      <div className="container">
        <div className="register-form">
          {this.state.error && <p className="add-error"> {this.state.error}</p>  }
        <form onSubmit={this.onSubmit}>

          <div className="input-field">
          <input
            id="name_ngo"
            type="text"
            value={this.state.name_ngo}
            onChange={this.onName_ngoChange}
          />
          <label htmlFor="name_ngo">Name of the organization</label>
      </div>


        <div className="input-field">
            <input
            id="name_head"
            type="text"
            value={this.state.name_head}
            onChange={this.onName_headChange}
          />
          <label htmlFor="name_head">Head of the organization</label>
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

      <div className="input-field">
          <input
          id="contact"
          type="text"
          value={this.state.contact}
          onChange={this.onContactChange}
        />
        <label htmlFor="contact">Contact No</label>
    </div>

    <div className="field-button">
            <button className="button form-button">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
    )
  }
}
