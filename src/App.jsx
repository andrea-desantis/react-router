import { BrowserRouter } from 'react-router-dom'
import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

import Homepage from './pages/Homepage';
import ChiSiamo from './pages/ChiSiamo';
import Prodotti from './pages/Prodotti';
import Layout from './layouts/Layout';
import Dettaglio from './pages/Dettaglio';
function App() {


  return (
    <>
      <BrowserRouter>
        
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Homepage />} />
            <Route path="/chi-siamo" element={<ChiSiamo />} />
            <Route path="/prodotti" element={<Prodotti />} />
            <Route path='/prodotti/:id' element={<Dettaglio />} />
          </Route>

        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
