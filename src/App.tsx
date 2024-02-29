import './App.css'
import Layout from './Layout'
import Bemutatkozas from './Bemutatkozas'
import Allatok from './Allatok'
import Programok from './Programok'
import Nyitvatartas from './Nyitvatartas'
import Kapcsolat from './Kapcsolat'
import { useState } from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {
  return(
    <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Layout/> }>
            <Route index element= { <Bemutatkozas />} />
            <Route path="allatok" element={ <Allatok />}/>
            <Route path="programok" element={ <Programok />}/>
            <Route path="nyitvatartas" element={ <Nyitvatartas />}/>
            <Route path="kapcsolat" element={ <Kapcsolat />}/>
          </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App
