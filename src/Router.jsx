import { Routes, Route } from 'react-router-dom'
import { ROUTES } from './config'
import Home from './pages/Home/index.jsx'
import StaffDirectory from './pages/StaffDirectory/index.jsx'
import RegisterEmployee from './pages/RegisterEmployee/index.jsx'
import NotFound from './pages/NotFound/index.jsx'

export default function Router() {
  return (
    <Routes>
      <Route path={ROUTES.STAFF_DIRECTORY} element={<StaffDirectory />} />
      <Route path={ROUTES.REGISTER_EMPLOYEE} element={<RegisterEmployee />} />
      <Route path={ROUTES.HOME} element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
