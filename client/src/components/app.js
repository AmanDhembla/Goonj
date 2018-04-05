import React,{Component} from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import Header from './Header';
import Landing from './Landing';
import Dashboard from './Dashboard';
import {connect} from 'react-redux';
import {fetchUser} from '../actions/index';
import Footer from './Footer';
class App extends Component {
    componentDidMount(){
        this.props.fetchUser();
    }
    render(){
        return (
            <div >
                <BrowserRouter>
                    <div>
                        <Header />
                        <Route path="/" component={()=>(<div><Landing /><Footer /></div>)} exact={true}/>
                        <Route path="/profile" component={Dashboard} exact={true}/>
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}

export default connect(null,{fetchUser})(App);