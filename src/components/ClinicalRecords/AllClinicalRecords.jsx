import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getClinicalRecords } from '../../service/api'


function AllClinicalRecords(params) {
  const { id } = useParams()
  const [clinicalRecord, setClinicalRecord] = useState([])

  useEffect(() => {
    getClinicalRecords(id).then(data => {
      setClinicalRecord(data)
    }).catch(error => {
      console.log(error)
    })
  }, [])
  
  return (
    <React.Fragment>
    <div>
    <Link to={`/new-clinicalrecord/${id}`} className='p-3 flex items-center justify-end'>
      <button type="button" 
        className="text-gray-900 border border-gray-300 focus:outline-none hover:bg-green-400 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 bg-green-200">
          Agregar Nueva ficha Clinica
      </button>
    </Link>
    </div>
      <div className='p-10 inline-grid grid-cols-4 gap-10 mx-28'>{
        clinicalRecord.map(person =>{
          return (
            <div key={person.id} className="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Paciente: {person.patient_clincal_record}</h5>
              <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Specialista: {person.profesional_name}</h2>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"> Tipo de atencion: {person.care}</p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"> Superficie: {person.surface}</p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"> Presupuesto: {person.budget}</p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"> Fecha actual: {person.actual_date}</p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"> Hora Actual: {person.actual_hour}</p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"> Indicaciones: {person.indications}</p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"> Observaciones: {person.observations}</p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"> Estado de asistencia: {person.attendance}</p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"> Boleta: {person.ticket}</p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"> Diagnostico: {person.diagnostic}</p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"> Tratamiento: {person.treatment}</p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"> Tratamiento Realizado: {person.treatment_perfomed}</p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"> Proxima cita: {person.next_reservation}</p>
              <Link to='/'>
                  <button 
                  type="button" 
                  className="text-white bg-purple-800 hover:bg-purple-700 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2"
                  >Actualizar</button>
                </Link>
            </div>
          )
          
        })
      }
      </div>
    </React.Fragment>
  )
}

export default AllClinicalRecords