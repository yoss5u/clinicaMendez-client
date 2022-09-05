import React from "react";
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <Link to="/" className="hover:underline">Clinica Mendez</Link>. Derechos Reservados.
      </span>
      <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
              <a href="/allpatient" className="mr-4 hover:underline md:mr-6 ">Pacientes</a>
          </li>
          <li>
              <a href="/viewreservations" className="mr-4 hover:underline md:mr-6">Reservaciones</a>
          </li>
          <li>
              <a href="#" className="hover:underline">Contacto</a>
          </li>
      </ul>
    </footer>
  )
}

export default Footer