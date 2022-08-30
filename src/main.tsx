import React from 'react'
import ReactDOM from 'react-dom/client'
import FirstApp from './FirstApp'
import HelloWorldApp from './HelloWorldApp'
import './assets/styles.css'
import CounterApp from './CounterApp/CounterApp'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* <HelloWorldApp />
    <FirstApp /> */}
    <CounterApp value={ 0 } />
  </React.StrictMode>
)
