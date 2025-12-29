import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import SigninPage from './pages/SigninPage'


const App = () => {
  return (
    <div>

      <BrowserRouter>
        <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/Signin' element={<SigninPage />} />
      </Routes>
      </BrowserRouter>
    </div>                                                                                                              
  )
}

export default App