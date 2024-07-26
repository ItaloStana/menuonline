import { Routes, Route } from 'react-router-dom'

import MainPage from './pages/Main'
import BurguersPage from './pages/Main/Burguers'
import PizzasPage from './pages/Main/Pizzas'
import BebidasPage from './pages/Main/Bebidas'
import SobremesasPage from './pages/Main/Sobremesas'
import AcompanhamentosPage from './pages/Main/Acompanhamentos'
import MyCartPage from './pages/MyCart'
import Payment from './pages/Payments'

export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={< MainPage />}>
        <Route path='/' element={< BurguersPage />} />
        <Route path='pizzas' element={< PizzasPage />} />
        <Route path='acompanhamentos' element={< AcompanhamentosPage />} />
        <Route path='bebidas' element={< BebidasPage />} />
        <Route path='sobremesas' element={< SobremesasPage />} />
      </Route>
      <Route path='cart' element={<MyCartPage/>} />
      <Route path='payment' element={<Payment/>} />
    </Routes>
  )
}
