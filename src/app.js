import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import AppRouter from './routers/app_router';

ReactDOM.render(<AppRouter />, document.getElementById('react_container'));