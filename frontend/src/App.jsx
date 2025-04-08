import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Feedback from './component/Feedback'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element= {<Feedback/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
