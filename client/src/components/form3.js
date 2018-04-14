import React from 'react';
export default class Form3 extends React.Component{

  constructor(props){
    super(props);

    this.state={
      acc_name: "",
      bank_name: "",
      branch_name: "",
      bank_acc_no: "",
      ifsc: "",
      error: undefined
    };
  }

  onAcc_nameChange=(e)=>{
    const acc_name= e.target.value;
    this.setState(()=>({acc_name}));

  }
  onBank_nameChange=(e)=>{
    const bank_name= e.target.value;
    this.setState(()=>({bank_name}));
  }
  onBranch_nameChange=(e)=>{
      const branch_name=e.target.value;
      this.setState(()=>({branch_name}));
  }
  onBank_acc_noChange=(e)=>{
      const bank_acc_no=e.target.value;
      this.setState(()=>({bank_acc_no}));
  }
  onIfscChange=(e)=>{
        const ifsc=e.target.value;
        this.setState(()=>({ifsc}));
    }


  onSubmit=(e)=>{
    e.preventDefault();

    if(!this.state.bank_acc_no || !this.state.branch_name || !this.state.bank_name||!this.state.acc_name||!this.state.ifsc){
      this.setState(()=>({error: "Please provide all the options"}));
    }
    else{
      this.setState(()=>({error: undefined}));
      this.props.onSubmit({
        acc_name: this.state.acc_name,
        bank_name: this.state.bank_name,
        branch_name: this.state.branch_name,
        bank_acc_no: this.state.bank_acc_no,
        ifsc: this.state.ifsc
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
            id="acc_name"
            type="text"
            value={this.state.acc_name}
            onChange={this.onAcc_nameChange}
          />
          <label htmlFor="acc_name">Account Holder Name</label>
      </div>


        <div className="input-field">
            <input
            id="bank_name"
            type="text"
            value={this.state.bank_name}
            onChange={this.onBank_nameChange}
          />
          <label htmlFor="bank_name">Bank Name</label>
      </div>

      <div className="input-field">
          <input
          id="branch_name"
          type="text"
          value={this.state.branch_name}
          onChange={this.onBranch_nameChange}
        />
        <label htmlFor="branch_name">Branch Name</label>
    </div>

    <div className="input-field">
        <input
        id="bank_acc_no"
        type="text"
        value={this.state.bank_acc_no}
        onChange={this.onBank_acc_noChange}
      />
      <label htmlFor="bank_acc_no">Bank Account No</label>
  </div>

  <div className="input-field">
      <input
      id="ifsc"
      type="text"
      value={this.state.ifsc}
      onChange={this.onIfscChange}
    />
    <label htmlFor="ifsc">Ifsc Code</label>
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
