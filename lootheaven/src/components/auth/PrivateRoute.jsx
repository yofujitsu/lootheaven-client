import React from 'react'
import {Navigate} from 'react-router-dom'
import {useAuth} from './AuthContext'

function PrivateRoute({children}) {
    const {isAuthenticated} = useAuth()
    console.log(isAuthenticated);
    return isAuthenticated ? children : <Navigate to="/me"/>
}

export default PrivateRoute