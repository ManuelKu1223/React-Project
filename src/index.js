import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './css/bootstrap.min.css';
import './css/sb-admin.min.css';
import PostApp from './PostApp';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<PostApp />, document.getElementById('root'));
registerServiceWorker();
