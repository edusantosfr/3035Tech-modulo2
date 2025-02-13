import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { PrivateRoutes } from './PrivateRouts'

import { Profile, Login } from '../pages'

export function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='*' element={<h1>Página Não Encontrada</h1>} />
                <Route path='/login' element={<Login />} />

                <Route element={<PrivateRoutes isAuthenticated={false}/>} >
                    <Route path='/profile' element={<Profile/>}/>
                    <Route path='/accout' element={<h1>Account</h1>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}