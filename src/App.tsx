import React, {useState} from 'react';
import { AuthProvider } from './context/AuthProvider'
import { BrowserRouter, Routes as RoutesDOM, Route } from 'react-router-dom';
import { ProtectedLayout } from './components/ProtectedLayout';
import { Login } from './components/Login';
import { Admin } from './components/Admin';



export function App() {
 
  return (
    <AuthProvider>
      <BrowserRouter>
        
      <RoutesDOM>
        {/**essa rota somente pessoas logadas podem acessar */}
        <Route path='profile'>
            <Route index element={<ProtectedLayout>

              <Admin/>
            </ProtectedLayout>} />
          

        </Route>
        <Route path='login'>
            <Route index element={<Login />} />

        </Route>


      </RoutesDOM>
      </BrowserRouter>
      
    </AuthProvider>
  )
}


