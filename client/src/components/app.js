import React,{Component} from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import Header from './Header';
import Landing from './Landing';

class App extends Component {
    render(){
        return (
            <div className="container">
                <BrowserRouter>
                    <div>
                        <Header />
                        <Route path="/" component={Landing} exact={true}/>
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}

export default App;