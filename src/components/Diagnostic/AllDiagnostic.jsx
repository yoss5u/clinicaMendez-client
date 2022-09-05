import React, { useState, useEffect } from 'react'
import { getData } from '../../service/api'
import { Link, useParams } from 'react-router-dom'

function AllDiagnostic(params) {
  const { type } = useParams()
  const [diagnostics, setDiagnostics] = useState([])

  useEffect(() =>{
    getData(type).then(data => {
      setDiagnostics(data)
    }).catch(error =>{
      console.log(error)
    })
  })

  return (
    <React.Fragment>
    <div>
    <Link to={`/new-diagnostic-treatment/${type}`} className='p-3 flex items-center justify-end'>
      <button type="button" 
        className="text-gray-900 border border-gray-300 focus:outline-none hover:bg-green-400 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 bg-green-200">
          Agregar nuevo {type}
      </button>
    </Link>
    </div>
      {
      diagnostics.map(data => {
        return (
          <div key={data.id} className='p-10 inline-grid'>
            <Link to="/viewreservations" className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{data.diagnostic_type || data.treatment_type}</h5>
            </Link>
          </div>
        )
      })
      }
    </React.Fragment>
  )
}

export default AllDiagnostic