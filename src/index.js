import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import * as serviceWorker from './serviceWorker';
import rootReducer from './store/reducers/rootReducer';

let store = createStore(rootReducer, applyMiddleware(thunk))

ReactDOM.render(
    <Provider store={ store }>
        <App />
    </Provider>,
    document.getElementById('root')
);
serviceWorker.register();