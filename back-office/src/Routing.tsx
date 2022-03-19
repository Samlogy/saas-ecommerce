import { Admin, NotFound } from './pages'

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

export default Routing
