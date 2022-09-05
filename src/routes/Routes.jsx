import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import LogInPage from '../components/loginPage/LoginPage'
import MainPageContainer from '../components/container/MainPageContainer'
import PrivateRoute from '../components/privateRoutes/PrivateRoutes'
import NewPatientContainer from '../components/container/NewPatientContainer'
import AllPatientContainer from '../components/container/AllPatientContainer'
import OnePatientContainer from '../components/container/OnePatientContainer'
import ClinicalRecrodContainer from '../components/container/ClincalRecordContainer'
import NewReservationContainer from '../components/container/NewReservationsContainer'
import ViewReservationsContainer from '../components/container/ViewReservationsContainer'
import AllDiagnosticContainer from '../components/container/AllDiagnosticContainer'
import NewDiagnosticContainer from '../components/container/NewDiagnosticContainer'
import NewClinicalRecordContainer from '../components/container/NewClinicalRecordContainer'

function RoutesApp() {
  const auth = localStorage.getItem('userProfile')
  return (
    <React.Fragment>
      <Routes>
        <Route exact path='/login' element={<LogInPage />} />
        <Route exact path='/' element={<PrivateRoute/>}>
          <Route exact path='/' element={<MainPageContainer/>}/>
        </Route>
        <Route exact path='/newpatient' element={<PrivateRoute/>}>
          <Route exact path='/newpatient' element={<NewPatientContainer/>}/>
        </Route>
        <Route exact path='/allpatient' element={<PrivateRoute/>}>
          <Route exact path='/allpatient' element={<AllPatientContainer/>}/>
        </Route>
        <Route exact path='/allpatient/:id' element={<PrivateRoute/>}>
          <Route exact path='/allpatient/:id' element={<OnePatientContainer />}/>
        </Route>
        <Route exact path='/clinicalrecord/:id' element={<PrivateRoute/>}>
          <Route exact path='/clinicalrecord/:id' element={<ClinicalRecrodContainer />}/>
        </Route>
        <Route exact path='/new-clinicalrecord/:id' element={<PrivateRoute/>}>
          <Route exact path='/new-clinicalrecord/:id' element={<NewClinicalRecordContainer />}/>
        </Route>
        <Route exact path='/newreservation' element={<PrivateRoute/>}>
          <Route exact path='/newreservation' element={<NewReservationContainer />}/>
        </Route>
        <Route exact path='/viewreservations' element={<PrivateRoute/>}>
          <Route exact path='/viewreservations' element={<ViewReservationsContainer />}/>
        </Route>
        <Route exact path='/diagnostic-treatment/:type' element={<PrivateRoute/>}>
          <Route exact path='/diagnostic-treatment/:type' element={<AllDiagnosticContainer />}/>
        </Route>
        <Route exact path='/new-diagnostic-treatment/:type' element={<PrivateRoute/>}>
          <Route exact path='/new-diagnostic-treatment/:type' element={<NewDiagnosticContainer />}/>
        </Route>
      </Routes>
    </React.Fragment>
  )
}

export default RoutesApp