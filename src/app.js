import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import AppRouter from './routers/AppRouter';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import reducers from './reducers';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const createStoreWithMiddleWare = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleWare(reducers)}>
     <AppRouter />
  </Provider>,
  document.getElementById('app'));
