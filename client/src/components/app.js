import React,{Component} from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Header from './Header';
import Landing from './Landing';
import Card from './Card';
import Dashboard from './Dashboard';
import AddVolunteer from './AddVolunteer';
import {connect} from 'react-redux';
import {fetchUser} from '../actions/index';
import Footer from './Footer';
class App extends Component {
    componentDidMount(){
        this.props.fetchUser();
    }
    render(){
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Header />
                        <Switch>
                        <Route path="/" component={()=>(<div><Landing /><Card /><Footer /></div>)} exact={true}/>
                        <Route path="/profile" component={Dashboard}/>
                        <Route path="/add_volunteer" component={AddVolunteer}/>
                         </Switch>
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}

export default connect(null,{fetchUser})(App);
