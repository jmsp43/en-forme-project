import { useState } from 'react'
import './App.css'
import Custom from './components/Custom'
import Form from './components/Form'
import Header from './components/Header'
import Nav from './components/Nav'
import FetchWorkouts from './services/fetchWorkouts'

function App() {

  return (
    <div className="App">
      <div>
        <Header />
        <Nav />
        <Form />
        <FetchWorkouts />
        <Custom />
        </div>
    </div>
  )
}

export default App
