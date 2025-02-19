import React from 'react'
import {Navigate, Outlet} from "react-router-dom"
import { useAuth } from './Authentication'

function Protectedroute() {
  const {isAuth} =useAuth()

  return isAuth ? <Outlet/> : <Navigate to="/login"/>
}

export default Protectedroute