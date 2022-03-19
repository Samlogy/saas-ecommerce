import { Admin, NotFound, Stats, Notifications, Notification } from './pages'

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
        <Route path="/" element={<Stats />} />
        <Route path="statistics" element={<Stats />} />

        <Route path="products" element={<Admin />} />
        <Route path="notifications" element={<Notifications />} />
        <Route path="notification/:id" element={<Notification />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Routing
