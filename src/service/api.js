export const login = async (userProfile) => {
  const resquestOptions = {
    method: 'POST',
    headers: { 
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userProfile)
  }
  try {
    const response = await fetch('http://127.0.0.1:8000/api/v1/login/', resquestOptions)
    const data = await response.json()
    return data
  } catch (error) {
    return error 
  }
}

export const getData = async (type) => {
  //TokenAPI = localStorage.getItem('userProfile')
  const requestOptions = {
    method: 'GET',
    headers: {
      'Authorization': `Token ${localStorage.getItem('userProfile')}`
    }
      
  }
  try {
    const response = await fetch(`http://127.0.0.1:8000/api/v1/${type}/`, requestOptions)
    const data = await response.json()
    return data
  } catch (error) {
    return error
  }
}

export const postData = async (type, data) => {
  //TokenAPI = localStorage.getItem('userProfile')
  const requestOptions = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Token ${localStorage.getItem('userProfile')}`
    },
    body: JSON.stringify(data)
      
  }
  try {
    const response = await fetch(`http://127.0.0.1:8000/api/v1/${type}/`, requestOptions)
    const data = await response.json()
    return data
  } catch (error) {
    return error
  }
}

export const putData = async (type, data, id) => {
  //TokenAPI = localStorage.getItem('userProfile')
  const requestOptions = {
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Token ${localStorage.getItem('userProfile')}`
    },
    body: JSON.stringify(data)
      
  }
  try {
    const response = await fetch(`http://127.0.0.1:8000/api/v1/${type}/${id}/`, requestOptions)
    const data = await response.json()
    return data
  } catch (error) {
    return error
  }
}

export const oneData = async (type, id) => {
  //TokenAPI = localStorage.getItem('userProfile')
  const requestOptions = {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Token ${localStorage.getItem('userProfile')}`
    },
      
  }
  try {
    const response = await fetch(`http://127.0.0.1:8000/api/v1/${type}/${id}/`, requestOptions)
    const data = await response.json()
    return data
  } catch (error) {
    return error
  }
}

export const deleteData = async (type, id) => {
  //TokenAPI = localStorage.getItem('userProfile')
  const requestOptions = {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Token ${localStorage.getItem('userProfile')}`
    },
  }
  try {
    const response = await fetch(`http://127.0.0.1:8000/api/v1/${type}/${id}/`, requestOptions)
    const data = await response.json()
    return data
  } catch (error) {
    return error
  }
}

export const getClinicalRecords = async (id) => {
  const requestOptions = {
    method: 'GET',
    headers: {
      'Authorization': `Token ${localStorage.getItem('userProfile')}`
    }
  }

  try {
    const response = await fetch(`http://127.0.0.1:8000/api/v1/clinicalrecords/?search=${id}`, requestOptions)
    const data = await response.json()
    return data
  } catch (error) {
    return error
  }
}