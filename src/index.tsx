import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.sass'
import reportWebVitals from './reportWebVitals';
import { applyMiddleware, createStore, compose } from 'redux'
import {Provider} from "react-redux";
import thunk from 'redux-thunk'
import {rootReducer} from './redux/reducers/rootReducer'


export const composeEnhancers = (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const Store = createStore(rootReducer,
  composeEnhancers(
    applyMiddleware(thunk)
  )
)

ReactDOM.render(
  <Provider store={Store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
