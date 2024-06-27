import { Routes, Route } from 'react-router-dom'
import { ROUTES } from './config'
import Home from './pages/Home/index.jsx'
import EmployeeList from './pages/EmployeeList/index.jsx'
import NotFound from './pages/NotFound/index.jsx'

export default function Router() {
  return (
    <Routes>
      <Route path={ROUTES.EMPLOYEE_LIST} element={<EmployeeList />} />
      <Route path={ROUTES.HOME} element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
