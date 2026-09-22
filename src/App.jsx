import React, { useEffect } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboards/EmployeeDashboard'
import AdminDashboard from  './components/Dashboards/AdminDashboard'
import { setLocalStorage } from './utils/localstorage'
const App = () => {
  // useEffect(() => {
  //   setLocalStorage()
  
   
  // }, [third])
  
  return (
    <>
    <AdminDashboard/>
    {/* <EmployeeDashboard/> */}
    </>
  )
}

export default App