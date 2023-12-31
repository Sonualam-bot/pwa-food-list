import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import AppService from "./App.jsx"
import './index.css'
import 'materialize-css/dist/css/materialize.min.css';
import 'material-icons/iconfont/material-icons.css';


import { BrowserRouter } from "react-router-dom"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
