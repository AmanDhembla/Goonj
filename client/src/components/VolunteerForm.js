import React from 'react';
export default class VolunteerForm extends React.Component{

  constructor(props){
    super(props);

    this.state={
      first_name: "",
      last_name: "",
      email: "",
      gender: "",
      city: "",
      profession: "",
      contact: "",
      birth: "",
      error: undefined
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
  onGenderChange=(e)=>{
    const gender=e.target.value;
      this.setState(()=>({gender}));
  }
  onBirthChange=(e)=>{
    const birth=e.target.value;
      this.setState(()=>({birth}));
  }
  onCityChange=(e)=>{
    const city=e.target.value;
      this.setState(()=>({city}));
  }
  onProfessionChange=(e)=>{
    const profession=e.target.value;
      this.setState(()=>({profession}));
  }
  onContactChange=(e)=>{
    const contact=e.target.value;
      this.setState(()=>({contact}));
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
      <div className="container">
        <div className="register-form">
        <h3 className="form-title">Enter your details</h3>
          {this.state.error && <p className="add-error"> {this.state.error}</p>  }
        <form onSubmit={this.onSubmit}>

          <div className="row">
          <div className="col s5 offset-s1 input-field">
          <input
            id="first Name"
            type="text"
            value={this.state.first_name}
            onChange={this.onFirst_nameChange}
          />
          <label htmlFor="first_name">First Name</label>
      </div>


        <div className="col s5 offset-s1 input-field">
            <input
            id="last_name"
            type="text"
            value={this.state.last_name}
            onChange={this.onLast_nameChange}
          />
          <label htmlFor="last_name">Last Name</label>
      </div>
</div>

      <div className="row">
        <div className="col s5 offset-s1 input-field">
            <input
            id="email"
            className="validate"
            type="email"
            value={this.state.email}
            onChange={this.onEmailChange}
          />
          <label htmlFor="email">Email</label>
      </div>
      <div className="col s5 offset-s1 input-field">
          <input
          id="gender"
          type="text"
          value={this.state.gender}
          onChange={this.onGenderChange}
        />
        <label htmlFor="gender">Gender</label>
      </div>

  </div>
    <div className="row">
      <div className="col s5 offset-s1 input-field">
          <input
          id="birth"
          type="text"
          value={this.state.birth}
          onChange={this.onBirthChange}
        />
        <label htmlFor="birth">Date of Birth</label>
    </div>
    <div className="col s5 offset-s1 input-field">
        <input
        id="city"
        type="text"
        value={this.state.city}
        onChange={this.onCityChange}
      />
      <label htmlFor="city">City</label>
    </div>

  </div>
    <div className="row">
      <div className="col s5 offset-s1 input-field">
          <input
          id="profession"
          type="text"
          value={this.state.profession}
          onChange={this.onProfessionChange}
        />
        <label htmlFor="profession">Profession</label>
    </div>
    <div className="col s5 offset-s1 input-field">
        <input
        id="contact"
        type="text"
        value={this.state.contact}
        onChange={this.onContactChange}
      />
      <label htmlFor="contact">Contact</label>
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
