import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import 'antd/dist/antd.css';

import Store from './Store/store.jsx'
import App from './App/app.jsx';

const store = {Store}

ReactDOM.render(
    <Provider {...store}>
        <App />
    </Provider>, 
    document.getElementById('root')
)