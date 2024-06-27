import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Router from './Router.jsx'
import './styles/index.css'
import Header from './components/Header/index.jsx'

function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Header />
        <Router />
      </BrowserRouter>
    </React.StrictMode>
  )
}

export default App
