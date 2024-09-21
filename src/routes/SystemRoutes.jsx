import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/home/Home'
import UserRoutes from './UserRoutes'

const SystemRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path="/user/*" element={<UserRoutes />} />
        </Routes>
    </BrowserRouter>
  )
}

export default SystemRoutes;