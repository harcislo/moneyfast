import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {setupStore} from "./store/store";
import {Provider} from "react-redux";
import 'antd/dist/antd.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
const store = setupStore()

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

