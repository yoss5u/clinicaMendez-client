import React, { useState, useEffect } from 'react'
import { postData, getData } from '../../service/api'
import { useNavigate, useParams } from 'react-router-dom'
import moment from 'moment'


function NewClinicalRecord(params) {
  const navigate = useNavigate()
  const { id } = useParams()
  const [patients, setPatients] = useState([])
  const [specialists, setSpecialists] = useState([])
  const [diagnostics, setDiagnostics] = useState([])
  const [treatments, setTreatments] = useState([])
  const [clincalRecord, setClinicalRecord] = useState({
      care: '',
      surface: '',
      budget: '',
      actual_date: '',
      actual_hour: '',
      indications: '',
      observations: '',
      attendance: '',
      ticket: '',
      patient_clincal_record: '',
      profesional_name: '',
      diagnostic: '',
      treatment: '',
      treatment_perfomed: '',
      next_reservation: ''
  })

  const handleChange = (e) => {
    const {target} = e
    const {name, value} = target

    const newData = {
      ...clincalRecord,
      [name]: value,
    }
    setClinicalRecord(newData)
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
    const actual_date_value = String(moment().format('YYYY-MM-DD'))
    const actual_hour_value = String(moment().format('hh:mm'))
    clincalRecord.actual_date = actual_date_value
    clincalRecord.actual_hour = actual_hour_value
    postData('clinicalrecords', clincalRecord).then(res => {
      navigate(`/clinicalrecord/${id}`)
    }).catch(error => {
      console.log(error)
    })
  }

  useEffect(() => {
    getData('patient').then(data => {
      setPatients(data)
    }).catch((error) => {
      console.log(error)
    })

    getData('specialist-profile').then(data => {
      setSpecialists(data)
    }).catch(error => {
      console.log(error)
    })

    getData('diagnostics').then(data => {
      setDiagnostics(data)
    }).catch(error => {
      console.log(error)
    })

    getData('treatments').then(data => {
      setTreatments(data)
    }).catch(error => {
      console.log(error)
    })
    

  }, [])

  return (
    <div className='p-10 flex justify-center content-center'>
      <form onSubmit={handleSubmit}>
        <div className='p-3'>
        <label htmlFor="patient_clincal_record" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Paciente: </label>
        <select name='patient_clincal_record' onChange={handleChange} id="patient_clincal_record"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option> --- Selecciona el Paciente --- </option>{
            patients.map(patient => {
              return (
                <option
                key={patient.id}
                name='patiente_reservation'
                value={patient.id}
                className='font-normal text-white'
                >
                {patient.full_name} {patient.father_lastname}
                </option>
              )
            })
          }
        </select>
        </div>
        
        <div className='p-3'>
        <label htmlFor="profesional_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Specialista: </label>
        <select name='profesional_name' onChange={handleChange} id="profesional_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option> --- Selecciona el Specialistas --- </option>{
            specialists.map(specialist => {
              return (
                <option
                key={specialist.id}
                name='profesional_name'
                value={specialist.id}
                className='font-normal text-white'
                >
                {specialist.name_complete} {specialist.father_lastname} {specialist.type_specialist}
                </option>
              )
            })
          }
        </select>
        </div>

        <div className='p-3'>
        <label htmlFor="care" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Tipo De Atencion: </label>
        <select name='care' id="care" onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option> --- Selecciona tipo de Atencion --- </option>
          <option
          name='care'
          value={'Urgencia'}
          className='font-normal text-white'
          >Urgencia</option>
          <option
          name='care'
          value={'Tratamiento'}
          className='font-normal text-white'
          >Tratamiento</option>
        </select>
        </div>

        <div className='p-3'>
        <label htmlFor="surface" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Tipo De Atencion: </label>
        <select name='surface' id="surface" onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option> --- Selecciona tipo de Superficie --- </option>
          <option
          name='surface'
          value={'M'}
          className='font-normal text-white'
          >M</option>
          <option
          name='surface'
          value={'O'}
          className='font-normal text-white'
          >O</option>
          <option
          name='surface'
          value={'D'}
          className='font-normal text-white'
          >D</option>
        </select>
        </div>

        <div className='p-3'>
        <label htmlFor="diagnostic" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Diagnostico: </label>
        <select name='diagnostic' onChange={handleChange} id="diagnostic" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option> --- Selecciona el Diagnostico --- </option>{
            diagnostics.map(diagnostic => {
              return (
                <option
                key={diagnostic.id}
                name='diagnostic'
                value={diagnostic.id}
                className='font-normal text-white'
                >
                {diagnostic.diagnostic_type}
                </option>
              )
            })
          }
        </select>
        </div>

        <div className='p-3'>
        <label htmlFor="treatment" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Tratamiento: </label>
        <select name='treatment' onChange={handleChange} id="treatment" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option> --- Selecciona el Tratamiento --- </option>{
            treatments.map(treatment => {
              return (
                <option
                key={treatment.id}
                name='treatment'
                value={treatment.id}
                className='font-normal text-white'
                >
                {treatment.treatment_type}
                </option>
              )
            })
          }
        </select>
        </div>

        <div className="relative z-0 mb-6 w-full py-3">
        <input 
          type="text" 
          name="budget" 
          id="budget" 
          onChange={handleChange}
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" " 
          required />
        <label htmlFor="budget" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Presupuesto </label>
        <button 
        type="submit" 
        className="m-10 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Agregar Ficha Clinica
        </button>
      </div>
      </form>
    </div>
  )
}

export default NewClinicalRecord