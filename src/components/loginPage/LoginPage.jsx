import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { login } from '../../service/api'

function LogInPage() {
  const navigate = useNavigate()
  const [userProfile, setUserProfile] = useState({
    username: '',
    password: ''
  })

  const handleSubmit = (e) =>{
    e.preventDefault()
    login(userProfile).then((res) =>{
      if (res.token) {
        localStorage.setItem('userProfile', res.token)
        navigate('/')
      }
    }).catch((error) => {
      console.log(error)
    })
  }

  const handleChange = (e) => {
    const {target} = e
    const {name, value} = target

    const user = {
      ...userProfile,
      [name]: value,
    }
    setUserProfile(user)
  }

  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden bg-slate-50">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center text-green-700">
                  Ingrese a su cuenta
                </h1>
                <form className="mt-6" onSubmit={handleSubmit}>
                    <div className="mb-2">
                        <label
                            htmlFor="email"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Correo Electronico
                        </label>
                        <input
                            type="email"
                            id='username'
                            name='username'
                            onChange={handleChange}
                            className="block w-full px-4 py-2 mt-2 text-green-700 bg-white border rounded-md focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            htmlFor="password"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Contraseña
                        </label>
                        <input
                            type="password"
                            id='password'
                            name='password'
                            onChange={handleChange}
                            className="block w-full px-4 py-2 mt-2 text-green-700 bg-white border rounded-md focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mt-6">
                        <button type='submit' className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-green-700 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600">
                            Iniciar Sesión
                        </button>
                    </div>
                </form>

                <p className="mt-8 text-xs font-light text-center text-gray-700">
                    {" "}
                    No posees una cuenta?{" "}
                    <Link
                        to="#"
                        className="font-medium text-green-600 hover:underline"
                    >
                        Comunicate con el IT
                    </Link>
                </p>
            </div>
        </div>
  )
}

export default LogInPage