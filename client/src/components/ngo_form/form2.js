import React from 'react';
export default class Form2 extends React.Component{

  constructor(props){
    super(props);

    this.state={
      house_no: "",
      street_name: "",
      city: "",
      state: "",
      pincode: "",
      error: undefined
    };
  }

  onHouse_noChange=(e)=>{
    const house_no=e.target.value;
      this.setState(()=>({house_no}));
  }
  onStreet_nameChange=(e)=>{
    const street_name=e.target.value;
      this.setState(()=>({street_name}));
  }
  onCityChange=(e)=>{
    const city=e.target.value;
      this.setState(()=>({city}));
  }
  onStateChange=(e)=>{
    const state=e.target.value;
      this.setState(()=>({state}));
  }
  onPincodeChange=(e)=>{
    const pincode=e.target.value;
      this.setState(()=>({pincode}));
  }


  onSubmit=(e)=>{
    e.preventDefault();

    if(!this.state.street_name || !this.state.city || !this.state.state||!this.state.pincode){
      this.setState(()=>({error: "Please provide all the options"}));
    }

    else{
      this.setState(()=>({error: undefined}));
      this.props.onSubmit({
        house_no: this.state.house_no,
        street_name: this.state.street_name,
        city: this.state.city,
        state: this.state.state,
        pincode: this.state.pincode

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
            id="house_no"
            type="text"
            value={this.state.house_no}
            onChange={this.onHouse_noChange}
          />
          <label htmlFor="house_no">House No</label>
      </div>


        <div className="input-field">
            <input
            id="street_name"
            type="text"
            value={this.state.street_name}
            onChange={this.onStreet_nameChange}
          />
          <label htmlFor="street_name">Street Name</label>
      </div>
      <div className="input-field">
          <input
          id="city"
          type="text"
          value={this.state.city}
          onChange={this.onCityChange}
        />
        <label htmlFor="city">City</label>

      </div><div className="input-field">
          <input
          id="state"
          type="text"
          value={this.state.state}
          onChange={this.onStateChange}
        />
        <label htmlFor="state">State</label>
    </div>
    <div className="input-field">
        <input
        id="pincode"
        type="text"
        value={this.state.pincode}
        onChange={this.onPincodeChange}
      />
      <label htmlFor="pincode">Pincode</label>
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
