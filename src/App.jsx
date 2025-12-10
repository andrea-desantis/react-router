import { BrowserRouter } from 'react-router-dom'
import { Routes, Route } from "react-router-dom";

import './App.css'
import Header from './components/Header';
import Homepage from './pages/Homepage';
import ChiSiamo from './pages/ChiSiamo';
import Prodotti from './pages/Prodotti';
function App() {
  

  return (
    <>
        <BrowserRouter>
        <Header />
          <Routes>
            <Route path="/" element={<Homepage />}/>
            <Route path="/chi-siamo" element={<ChiSiamo />}/>
            <Route path="/prodotti" element={<Prodotti />}/>
          </Routes>

        </BrowserRouter>
    </>
  )
}

export default App
