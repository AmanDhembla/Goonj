import React from 'react';
//import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';

import Progress from './Progress';
import Form1 from './form1';
import Form2 from './form2';
import Form3 from './form3';
import Form4 from './form4';
class AddNgo extends React.Component {
  constructor(props){
    super(props);

    this.state={
      step: 1,
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
            <Form1 onSubmit={(volunteer)=>{
              this.onStateChange();
              //props.history.push('/');

            }}
               step= {this.state.step}
               />
          </div>
        )
      case 2:
        return (
          <div>
            <Progress step={this.state.step} />
            <Form2 onSubmit={(volunteer)=>{
              this.onStateChange();
              //props.history.push('/');

            }}
               step= {this.state.step}/>
          </div>
        )
      case 3:
        return (
          <div>
            <Progress step={this.state.step} />
            <Form3 onSubmit={(volunteer)=>{
              this.onStateChange();
              //props.history.push('/');

            }}
               step= {this.state.step}/>
          </div>
        )
      case 4:
        return (
          <div>
            <Progress step={this.state.step} />
            <Form4 onSubmit={(volunteer)=>{
              this.props.history.push('/');
            }}
               step= {this.state.step}/>
          </div>
        )
      default:
        return (
          <div>
            Error
          </div>
        )
    }

  }
}

export default AddNgo;
