import logo from '/assets/logo/logo_wealth_health.png'
import { NavLink } from 'react-router-dom'
import { ROUTES } from '../../config.js'

export default function Header() {
  return (
    <header className="flex items-center justify-between py-2 pl-5 pr-10 border-custom-gray-200 bg-white  border-b-3">
      <div className="logo-container w-30 ">
        <img
          src={logo}
          alt="Logo de l'entreprise Wealth Health"
          className="h-24"
        />
      </div>
      <nav className=" w-70">
        <ul className="flex justify-end gap-10 text-lg">
          <NavLink
            to={ROUTES.HOME}
            className={({ isActive }) =>
              isActive
                ? 'font-medium text-custom-green-300 underline underline-offset-2 decoration-custom-green-300'
                : 'text-custom-gray-900 hover:text-custom-green-300'
            }
          >
            Home
          </NavLink>

          <NavLink
            to={ROUTES.EMPLOYEE_LIST}
            className={({ isActive }) =>
              isActive
                ? 'font-medium text-custom-green-300 underline underline-offset-2 decoration-custom-green-300'
                : 'text-custom-gray-900 hover:text-custom-green-300'
            }
          >
            Staff
          </NavLink>
        </ul>
      </nav>
    </header>
  )
}
