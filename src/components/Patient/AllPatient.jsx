import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'


// API Services
import { getData } from '../../service/api'

function AllPatient() {
  const [patients, setPatients] = useState([])

  useEffect(() => {
    getData('patient').then(patient => {
      setPatients(patient)
    }).catch((error) => {
      console.log(error)
    })
  }, [])

  return (
    <React.Fragment>
    <div>
    <Link to='/newpatient' className='p-3 flex items-center justify-end'>
      <button type="button" 
        className="text-gray-900 border border-gray-300 focus:outline-none hover:bg-green-400 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 bg-green-200">
          Agregar Nuevo Paciente
      </button>
    </Link>
    </div>
      <div className='p-10 inline-grid grid-cols-4 gap-10 mx-28'>{
        patients.map(person =>{
          return (
            <div key={person.id} className="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <Link to={`/allpatient/${person.id}`}>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{person.full_name} {person.father_lastname}</h5>
              </Link>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"> Fecha de nacimiento: {person.date_of_birth}</p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"> Edad: {person.age}</p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"> Carrera: {person.carrera}</p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"> Año de ingreso: {person.year_of_income}</p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"> Direccion: {person.direction}</p>
              <Link to={`/clinicalrecord/${person.id}`} className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Ficha Clinica
                <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fil="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
              </Link>
            </div>
          )
          
        })
      }
      </div>
    </React.Fragment>
  )
}

export default AllPatient