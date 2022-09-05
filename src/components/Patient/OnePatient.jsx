import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { putData, oneData, deleteData } from '../../service/api'

function OnePatient() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [dataPatient, setDataPatient] = useState({
    full_name: '',
    father_lastname: '',
    mother_lastname: '',
    date_of_birth: '',
    age: '',
    carrera: '',
    year_of_income: '',
    direction: ''
  })
  
  const handleSubmit = (e) =>{
    e.preventDefault()
    putData('patient', dataPatient, id).then((res) =>{
      console.log(res)
    }).catch((error) => {
      console.log(error)
    })
    navigate('/allpatient')  
  }

  const handleChange = (e) => {
    const {target} = e
    const {name, value} = target

    const updateInfo = {
      ...dataPatient,
      [name]: value,
    }
    setDataPatient(updateInfo)
  }

  const handleDelete = () => {
    deleteData('patient', id).then(() => {
      navigate('/allpatient')
    }).catch((error) => {
      console.log(error)
    })
  }

  useEffect(() => {
    oneData('patient', id).then(data =>{
      setDataPatient(data)
    }).catch(error => {
      console.log(error)
    })
  }, [])

  return (  
    <div className='p-10 flex justify-center content-center'>
      <div className='w-auto'>       
      <form onSubmit={handleSubmit}>
        <div className="relative z-0 mb-6 w-full group">
            <input 
            type="text" 
            name="full_name" 
            id="full_name" 
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            value={dataPatient.full_name}
            onChange={handleChange} 
            placeholder=" " 
            required />
            <label htmlFor="full_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nombre Completo</label>
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 mb-6 w-full group">
              <input 
              type="text" 
              name="father_lastname" 
              id="father_lastname" 
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              value={dataPatient.father_lastname}
              onChange={handleChange} 
              placeholder=" " 
              required />
              <label htmlFor="father_lastname" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Apellido Paterno</label>
          </div>
          <div className="relative z-0 mb-6 w-full group">
              <input 
              type="text" 
              name="mother_lastname" 
              id="mother_lastname" 
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              value={dataPatient.mother_lastname}
              onChange={handleChange} 
              placeholder=" " 
              required />
              <label htmlFor="mother_lastname" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Apellido Materno</label>
          </div>
        </div>
        <div className="relative z-0 mb-6 w-full group">
            <input
            type="text" 
            name="date_of_birth" 
            id="date_of_birth" 
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            value={dataPatient.date_of_birth}
            onChange={handleChange} 
            placeholder=" " 
            required />
            <label htmlFor="date_of_birth" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Fecha de nacimiento</label>
        </div>
        <div className="relative z-0 mb-6 w-full group">
            <input 
            type="text" 
            name="age" 
            id="age" 
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            value={dataPatient.age}
            onChange={handleChange} 
            placeholder=" " 
            required />
            <label htmlFor="age" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Age</label>
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 mb-6 w-full group">
              <input type="text" 
              name="carrera" 
              id="carrera" 
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              value={dataPatient.carrera}
              onChange={handleChange} 
              placeholder=" " 
              required />
              <label htmlFor="carrera" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Carrera</label>
          </div>
          <div className="relative z-0 mb-6 w-full group">
              <input type="text" 
              name="year_of_income" 
              id="year_of_income" 
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              value={dataPatient.year_of_income}
              onChange={handleChange} 
              placeholder=" " 
              required />
              <label htmlFor="year_of_income" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Año de ingreso</label>
          </div>
          <div className="relative z-0 mb-6 w-full group">
              <input 
              type="text" 
              name="direction" 
              id="direction" 
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              value={dataPatient.direction}
              onChange={handleChange} 
              placeholder=" " 
              required />
              <label htmlFor="direction" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Direccion</label>
          </div>
        </div>
        <button 
        type="submit" 
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Actualizar Paciente</button>
        <button 
        type="submit"
        onClick={handleDelete} 
        className="p-10 m-10 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Eliminar Paciente</button>
      
      </form>
    </div>
    </div>
  )
}

export default OnePatient