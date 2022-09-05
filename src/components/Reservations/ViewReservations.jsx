import React, { useEffect, useState } from 'react'
import { getData } from '../../service/api'
import { Link } from 'react-router-dom'

function ViewReservations(params) {
  const [reservations, setReservations] = useState([])

  useEffect(() =>{
    getData('reservations').then(res => {
      setReservations(res)
    }).catch(error => {
      console.log(error)
    })
  })
  
  return (
    <React.Fragment>
    <div>
    <Link to='/newreservation' className='p-3 flex items-center justify-end'>
      <button type="button" 
        className="text-gray-900 border border-gray-300 focus:outline-none hover:bg-green-400 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 bg-green-200">
          Agregar Nuevo Cita
      </button>
    </Link>
    </div>
      {
      reservations.map(data => {
        return (
          <div key={data.id} className='p-10 inline-grid'>
            <Link to="/viewreservations" className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Fecha: {data.reservation_date}</h5>
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Hora: {data.reservation_time}</h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">Paciente: {data.patiente_reservation}</p>
              <p className="font-normal text-gray-700 dark:text-gray-400">Doctor: {data.doctor_reservation}</p>
            </Link>
          </div>
        )
      })
      }
    </React.Fragment>
  )
}

export default ViewReservations