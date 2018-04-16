import React from 'react';
export default class Form4 extends React.Component{

  constructor(props){
    super(props);

    this.state={
      registration_number: "",
      identity_proof: "",
      valid_from: "",
      valid_to: "",
      error: undefined
    };
  }

  onRegistration_numberChange=(e)=>{
    const registration_number= e.target.value;
    this.setState(()=>({registration_number}));

  }
  onIdentity_proofChange=(e)=>{
    const identity_proof= e.target.value;
    this.setState(()=>({identity_proof}));
  }
  onValid_fromChange=(e)=>{
      const valid_from=e.target.value;
      this.setState(()=>({valid_from}));
  }
  onValid_toChange=(e)=>{
    const valid_to=e.target.value;
      this.setState(()=>({valid_to}));
  }

  onSubmit=(e)=>{
    e.preventDefault();

    if(!this.state.registration_number || !this.state.identity_proof){
      this.setState(()=>({error: "Please provide all the options"}));
    }
    else{
      this.setState(()=>({error: undefined}));
      this.props.onSubmit({
        registration_number: this.state.registration_number,
        identity_proof: this.state.identity_proof,
        valid_from: this.state.valid_from,
        valid_to: this.state.valid_to

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
            id="registration_number"
            type="text"
            value={this.state.registration_number}
            onChange={this.onRegistration_numberChange}
          />
          <label htmlFor="registration_number">Registration Number</label>
      </div>


        <div className="input-field">
            <input
            id="identity_proof"
            type="text"
            value={this.state.identity_proof}
            onChange={this.onIdentity_proofChange}
          />
          <label htmlFor="identity_proof">Identity Proof</label>
      </div>

        <div className="row">
        <div className="col s6 input-field">
            <input
            id="valid_from"
            type="text"
            value={this.state.valid_from}
            onChange={this.onValid_formChange}
          />
          <label htmlFor="valid_from">Valid From</label>
      </div>
      <div className="col s6 input-field">
          <input
          id="valid_to"
          type="text"
          value={this.state.valid_to}
          onChange={this.onValid_toChange}
        />
        <label htmlFor="valid_to">Valid to</label>
    </div>
    </div>

    <div className="field-button">
            <button className="button form-button">
              Add User
            </button>
          </div>
        </form>
      </div>
    </div>

    )
  }
}
