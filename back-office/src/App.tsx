import React, { useState } from 'react'
import { Admin, NotFound } from './pages'
import { SideBar, TopBar, Widget, TotalRevenue } from './components'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route element={<ProtectedRoute />}>
          <Route path="home" element={<Admin />} />
          <Route path="admin" element={<Admin />} />
          <Route path="/" element={<Admin />} />
          <Route path="dashboard" element={<Admin />} />
        </Route> */}
        <Route path="/" element={<Admin />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

function App() {
  const data = [
    {
      name: 'sales',
      description: 'Total sales today',
      revenue: 1000.0
    },
    {
      name: 'sales',
      description: 'Total sales today',
      revenue: 1000.0
    },
    {
      name: 'sales',
      description: 'Total sales today',
      revenue: 1000.0
    }
  ]
  return (
    // <Routing />
    <>
      {/* <TopBar /> */}
      {/* <SideBar isOpen={isVisible} onClose={() => setIsVisible(false)} /> */}
      {data.map(el => (
        <Widget data={el} />
      ))}
      <TotalRevenue />
    </>
  )
}

export default App
