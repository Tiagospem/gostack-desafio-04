import React from 'react'
import './App.css'

import Header from './components/Header'
import Posts from './components/Posts'

function App(){
  return (
    <div id="wrapper">
      <Header />
      <Posts />
    </div>
  )
}

export default App;