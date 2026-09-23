import React, { useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboards/EmployeeDashboard'
import AdminDashboard from './components/Dashboards/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localstorage'
import { useContext } from 'react'
import { AuthContext } from './context/AuthProvider'

const App = () => {

  const [user, setuser] = useState(null)
  const authData = useContext(AuthContext)
  useEffect(() => {
    if (authData) {
      const loggedInUser = localStorage.getItem("LoggedInUser")
      if (loggedInUser) {
        setuser(loggedInUser.role)
      }
    }
  },[authData])

  const handleLogin = (email, pass) => {
    if (email == 'admin@employeemanager.com' && pass == '123') {
      setuser('admin')

    } else if (authData && authData.employees.find((e) => {
       return email == e.email && pass == e.pass

    })) {
      setuser('employee')
      localStorage.setItem("LoggedInUser", JSON.stringify({ role: 'employee' }))
    } else {
      alert("invalid credentials")
    }
    console.log(email, pass)
  }

  // const data=useContext(AuthContext)
  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ''}
      {user == 'admin' ? <AdminDashboard /> : <EmployeeDashboard />}



      {/* <EmployeeDashboard/> */}
    </>
  )
}

export default App