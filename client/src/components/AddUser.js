import React from 'react';

class AddUser extends React.Component{

  constructor(props){
    super(props);

    this.state={
      category: "Ngo",
      first_name: "",
      last_name: "",
      email: "",
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
  onSubmit=(e)=>{
    e.preventDefault();

    if(!this.state.first_name || !this.state.email || !this.state.category){
      this.setState(()=>({error: "Please provide all the options"}));
    }
    else{
      this.setState(()=>({error: undefined}));
      console.log("form submitted");
    }
  };
  render(){
    return(
      <div>
          {this.state.error && <p className="add-error"> {this.state.error}</p>  }

        <form onSubmit={this.onSubmit}>


            <p>
        <label>
          <input name="group1" type="radio" />
          <span>Red</span>
        </label>
      </p>
      <p>
        <label>
          <input name="group1" type="radio" />
          <span>Yellow</span>
        </label>
      </p>

          <div className="field">
          <input
            className="input"
            type="text"
            placeholder="First Name"
            value={this.state.first_name}
            onChange={this.onFirst_nameChange}
          />
            <span className="underline"></span>
        </div>

        <div className="field">
            <input
            className="input"
            type="text"
            placeholder="last_name"
            value={this.state.last_name}
            onChange={this.onLast_nameChange}
          />
            <span className="underline"></span>
        </div>

        <div className="field">
            <input
            className="input"
            type="text"
            placeholder="email"
            value={this.state.email}
            onChange={this.onEmailChange}
          />
            <span className="underline"></span>
        </div>


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

export default AddUser;
