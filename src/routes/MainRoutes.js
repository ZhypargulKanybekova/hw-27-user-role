import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Signin } from '../pages/Signin'
import { SignUp } from '../pages/SignUp'
import { UserLayout } from '../loyout/UserLayout'
import { MealLoyaut } from '../loyout/MealLoyaut'

export const MainRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<UserLayout/>}>
            <Route path='signin' element={<Signin/>}/>
            <Route path='signup' element={<SignUp/>}/>
            <Route index element={<MealLoyaut/>}/>
        </Route>
       
    </Routes>
  )
}
