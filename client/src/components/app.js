import React,{Component} from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Header from './Header';
import Landing from './Landing';
import Card from './Card';
import Dashboard from './Dashboard';
import AddNgo from './AddNgo';
import AddVolunteer from './AddVolunteer';
import AddEvent from './AddEvent';
import AddDonation from './AddDonation';
import {connect} from 'react-redux';
import {fetchUser} from '../actions/index';
import VolunteerProfile from './volunteer_profile/volunteerProfile'
import VolDonations from './volunteer_profile/volDonations'
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
                        <Route path="/profile" component={Dashboard} exact={true}/>
                        <Route path="/add_ngo" component={AddNgo}/>
                        <Route path="/add_volunteer" component={AddVolunteer}/>
                        <Route path="/add_Event" component={AddEvent}/>
                        <Route path="/add_Donation" component={AddDonation}/>
                        <Route path="/vol_profile" component={VolunteerProfile}/>
                        <Route path="/vol_donations" component={VolDonations}/>
                         </Switch>
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}

export default connect(null,{fetchUser})(App);
