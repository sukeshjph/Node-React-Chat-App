import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { store } from './store/store';
import {loadAllChats,loadAllMembers} from './service';
import App from './components/App';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

store.dispatch(loadAllChats());
store.dispatch(loadAllMembers());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
