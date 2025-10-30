import React from 'react'
import MainPage from './SafiraFolder/Pages/MainPage.jsx'
import LoginPage from './SafiraFolder/Pages/LoginPage.jsx'
import { Route, Routes } from 'react-router-dom'
import ContactUsPage from './SafiraFolder/Pages/ContactUsPage.jsx'
import Shop from './SafiraFolder/Pages/Shop.jsx'
const App = () => {
  return (
    <Routes>
      <Route path='/' element={<MainPage />}></Route>
      <Route path='/login' element={<LoginPage />}></Route>
      <Route path='/contactUs' element={<ContactUsPage />}></Route>
      <Route path='/Shop' element={<Shop />}></Route>
    </Routes>
  )
}

export default App