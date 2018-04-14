import React from 'react';
export default class Form1 extends React.Component{

  constructor(props){
    super(props);

    this.state={
      name: "",
      type: "",
      venue: "",
      date: "",
      description: "",
      error: undefined
    };
    }

    onNameChange=(e)=>{
    const name= e.target.value;
    this.setState(()=>({name}));

    }
    onTypeChange=(e)=>{
    const type= e.target.value;
    this.setState(()=>({type}));
    }
    onVenueChange=(e)=>{
      const venue=e.target.value;
      this.setState(()=>({venue}));
    }
    onDateChange=(e)=>{
    const date=e.target.value;
      this.setState(()=>({date}));
    }
    onDescriptionChange=(e)=>{
    const description=e.target.value;
      this.setState(()=>({description}));
    }

  onSubmit=(e)=>{
    e.preventDefault();

    if(!this.state.name || !this.state.venue || !this.state.date){
      this.setState(()=>({error: "Please provide all the options"}));
    }
    else{
      this.setState(()=>({error: undefined}));
      this.props.onSubmit({
        name: this.state.name,
        venue: this.state.venue,
        date: this.state.date,
        type: this.state.type,
        description: this.state.description
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
            id="name"
            type="text"
            value={this.state.name}
            onChange={this.onNameChange}
          />
          <label htmlFor="name">Event Name</label>
      </div>


        <div className="input-field">
            <input
            id="type"
            type="text"
            value={this.state.type}
            onChange={this.onTypeChange}
          />
          <label htmlFor="type">Event Type</label>
      </div>


        <div className="input-field">
            <input
            id="venue"
            type="text"
            value={this.state.venue}
            onChange={this.onVenueChange}
          />
          <label htmlFor="venue">Event Venue</label>
      </div>

      <div className="input-field">
          <input
          id="date"
          type="text"
          value={this.state.date}
          onChange={this.onDateChange}
        />
        <label htmlFor="date">Event Date</label>
    </div>

    <div class="input-field">
              <textarea id="description"
                class="materialize-textarea"
                value={this.state.description}
                onChange={this.onDescriptionChange}
                data-length="120">
                </textarea>
              <label for="description">Description</label>
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
