import React from 'react'
import ReactDOM from 'react-dom/client'
import { Weatherapp } from './Weatherapp.jsx'
import './styles/weatherStyles.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Weatherapp />
  </React.StrictMode>,
)
