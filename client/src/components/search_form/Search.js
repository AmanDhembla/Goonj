import React from 'react';
import {reduxForm,Field} from 'redux-form';
import selectField from './selectField';
import {withRouter} from 'react-router-dom';

class Search extends React.Component{

render(){
  return(
    <div className="container">
      <form onSubmit={this.props.handleSubmit((values)=>{this.props.search(values,this.props.history)})}>
        <Field id="search_field" type="text" name="name" component="input"/>
        <Field type="text" name="type" component={selectField}/>
        <button id="search_button" className="btn-flat green">Search<i id="search_icon" className="material-icons right">search</i></button>
      </form>
    </div>
  )
}
}



export default reduxForm({
  form: 'Search'
})(withRouter(Search));
