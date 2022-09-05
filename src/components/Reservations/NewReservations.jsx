import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { getData, postData } from '../../service/api'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import moment from 'moment'

function NewReservation() {
  const navigate = useNavigate()
  const [patients, setPatients] = useState([])
  const [specialists, setSpecialists] = useState([])
  const [dateState, setDateState] = useState(new Date())
  const [reservation, setReservation] = useState({
    reservation_date: '',
    reservation_time: '',
    patiente_reservation: '',
    doctor_reservation: ''
  })

  const handleChange = (e) =>{
    const {target} = e
    const {name, value} = target

    const newDato = {
      ...reservation,
      [name]: value,
    }
    setReservation(newDato)
  }
  
  const changeDate = (e) => {
    setDateState(e)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    reservation.reservation_date = moment(dateState).format('YYYY-MM-DD')
    postData('reservations', reservation).then(res => {
      navigate('/')
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

  }, [])

  return (
    <div className='p-10 flex justify-center content-center'>
    <form onSubmit={handleSubmit}>
      <div className='p-5'>
      <Calendar 
      value={dateState}
      onChange={changeDate}
      />
      </div>
      <div className="relative z-0 mb-6 w-full py-3">
        <input 
          type="text" 
          name="reservation_time" 
          id="reservation_time" 
          onChange={handleChange}
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" " 
          required />
        <label htmlFor="reservation_time" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Hora de la reservacion </label>
      </div>
      <div className='p-3'>
      <label htmlFor="patiente_reservation" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Paciente: </label>
      <select name='patiente_reservation' id="patiente_reservation" onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
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
      <label htmlFor="doctor_reservation" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Specialista: </label>
      <select name='doctor_reservation' id="doctor_reservation" onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option> --- Selecciona el Specialistas --- </option>{
          specialists.map(specialist => {
            return (
              <option
              key={specialist.id}
              name='doctor_reservation'
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
      <button 
        type="submit" 
        className="p-10 m-16 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Agregar Reservacion</button>
      
    </form>
    </div>
  )
}

export default NewReservation