import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Router from './Router.jsx'
import './styles/index.css'
import Header from './components/Header/index.jsx'
import { store, persistor } from './store/store.js'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Header />
          <Router />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  )
}

export default App
