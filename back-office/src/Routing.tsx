import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Products, NotFound, Analytics, Notifications, Notification } from './pages'

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
        <Route path="/" element={<Analytics />} />

        <Route path="products" element={<Products />} />
        <Route path="notifications" element={<Notifications />} />
        <Route path="notification/:id" element={<Notification />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Routing
