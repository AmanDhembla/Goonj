import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk';
import 'normalize.css/normalize.css';
 import 'materialize-css/dist/css/materialize.min.css';
import './css/style.css';

import App from './components/app';
import reducers from './reducers/index';

const store=createStore(reducers,{},applyMiddleware(reduxThunk));

ReactDOM.render(<Provider store={store}><App /></Provider>,document.getElementById('root'));
