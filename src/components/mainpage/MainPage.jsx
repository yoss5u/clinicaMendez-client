import React from 'react'
import { Link } from 'react-router-dom'

function MainPage() {
  return (
    <div className='p-10 grid grid-cols-3 gap-4 place-content-center'>
      <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <Link to="/allpatient">
            <img className="rounded-t-lg" src="/paciente.jpeg" alt="Foto del paciente" />
        </Link>
        <div className="p-5">
            <Link to="/allpatient">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Pacientes Clinica Mendez</h5>
            </Link>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Modulo para el control de los pacientes</p>
            <Link to="/allpatient" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Ir ahora!
                <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </Link>
        </div>
      </div>

      <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <Link to="/viewreservations">
            <img className="rounded-t-lg" src="/reservacion.jpg" alt="Foto de las reservaciones" />
        </Link>
        <div className="p-5">
            <Link to="/viewreservations">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Reservaciones Clinica Mendez</h5>
            </Link>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Modulo para el control de las reservaciones y posteriormente utilizarlas en las ficha clinica</p>
            <Link to="/viewreservations" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Ir ahora!
                <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </Link>
        </div>
      </div>

      <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <Link to="/diagnostic-treatment/diagnostic">
            <img className="rounded-t-lg" src="/diagnostico.jpg" alt="Foto de las reservaciones" />
        </Link>
        <div className="p-5">
            <Link to="/diagnostic-treatment/diagnostics">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Diagnosticos Dentales</h5>
            </Link>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Modulo para controlar los tipos de diagnosticos manejados por la clinica</p>
            <Link to="/diagnostic-treatment/diagnostics" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Ir ahora!
                <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </Link>
        </div>
      </div>

      <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <Link to="/diagnostic-treatment/treatments">
            <img className="rounded-t-lg" src="/tratamiento.jpg" alt="Foto de las reservaciones" />
        </Link>
        <div className="p-5">
            <Link to="/diagnostic-treatment/treatments">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Tratamiento Dentales</h5>
            </Link>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Modulo para controlar los tipos de tratamiento manejados por la clinica</p>
            <Link to="/diagnostic-treatment/treatments" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Ir ahora!
                <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </Link>
        </div>
      </div>
    </div>

    
  )
}

export default MainPage