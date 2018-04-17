import React from 'react';
//import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';

import Progress from './Progress';
import Form1 from './ngo_form/form1';
import Form2 from './ngo_form/form2';
import Form3 from './ngo_form/form3';
import Form4 from './ngo_form/form4';
import {saveNgo} from "../actions";

class AddNgo extends React.Component {
  constructor(props){
    super(props);

    this.state={
      step: 1
    };
  }
  onStateChange=()=>{
    const step=this.state.step +1;
    this.setState(()=>({step}));
  }
  render(){
    console.log(this.state.step);
    switch(this.state.step) {
      case 1:
        return (
          <div>
            <Progress step={this.state.step} />
            <Form1 onStateChange={this.onStateChange} saveNgo={this.props.saveNgo}/>
          </div>
        )
      case 2:
        return (
          <div>
            <Progress step={this.state.step} />
            <Form2 onStateChange={this.onStateChange} saveNgo={this.props.saveNgo} step= {this.state.step}/>
          </div>
        )
      case 3:
        return (
          <div>
            <Progress step={this.state.step} />
            <Form3 onStateChange={this.onStateChange} saveNgo={this.props.saveNgo} step= {this.state.step}/>
          </div>
        )
      case 4:
        return (
          <div>
            <Progress step={this.state.step} />
            <Form4 onStateChange={this.onStateChange} saveNgo={this.props.saveNgo} step= {this.state.step}/>
          </div>
        )
      default:
        return (
          <div>
          </div>
        )
    }

  }
}

export default connect(null,{saveNgo})(AddNgo);
