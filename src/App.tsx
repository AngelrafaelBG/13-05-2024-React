import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Presentacion from './Componentes/Presentacion/Presentacion'
import NoExiste from './Componentes/NoExiste'
import Principal from './Componentes/Pag_Principal/Principal'
import "./Componentes/NoExiste.css"
import "./Componentes/Presentacion/Presentacion.css"
import "./assets/banner.css"
import "./assets/pie_pagina.css"
import PlantillaPrincipal from './Componentes/PlantillaPrincipal'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route element={<PlantillaPrincipal />}>
      <Route path='/' element ={<Principal/>} />
      <Route path='/presentacion' element={<Presentacion />} />
      </Route>
      <Route path='*' element={<NoExiste />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
