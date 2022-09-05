import React, { useState } from 'react'
import { postData } from '../../service/api'
import { useNavigate, useParams } from 'react-router-dom'

function NewDiagnostic(params) {
  const { type } = useParams()
  const navigate = useNavigate()
  const [nameType, setNameType] = useState({
    type_name: ''
  })

  const [treatment, setTreatment] = useState({
    treatment_type: ''
  })

  const [diagnostic, setDiagnostic] = useState({
    diagnostic_type: ''
  })

  const handleChange = (e) =>{
    const {target} = e
    const {name, value} = target

    const newDato = {
      ...nameType,
      [name]: value,
    }
    setNameType(newDato)
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    if (type === 'diagnostics') {
      diagnostic.diagnostic_type = nameType.type_name
      postData('diagnostics', diagnostic).then(res => {
        navigate(`/diagnostic-treatment/${type}`)
      }).catch(error => {
        console.log(error)
      })
    }else if(type === 'treatments'){
      treatment.treatment_type = nameType.type_name
      setTreatment(nameType.type_name)
      postData('treatments', treatment).then(res => {
        navigate(`/diagnostic-treatment/${type}`)
      }).catch(error => {
        console.log(error)
      })
    }
  }



  return (
    <div className='p-10 flex justify-center content-center'>
      <div className='w-96'> 
        <form onSubmit={handleSubmit}>
          <div className="relative z-0 mb-6 w-full group">
            <input type="text" onChange={handleChange} name="type_name" id="type_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
            <label htmlFor="type_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Ingresar {type}</label>
          </div>
          <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Agregar</button>
        </form>
      </div>
    </div>
  )
}

export default NewDiagnostic