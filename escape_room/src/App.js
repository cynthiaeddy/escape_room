import React from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import DoorAltToo from './components/DoorAltToo'

function App() {
  return (
    <div className="container">
      <Route exact path="/" component={Home} />
      <Route path="/escape" component={DoorAltToo} />
    </div>
  )
}

export default App
