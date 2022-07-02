import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Intro from "./pages/Intro/Intro"
import Aim from "./pages/Aim/Aim"
import Home from './pages/Home/Home'
import Charity from "./pages/Charity/Charity"
import Orders from "./pages/Order/Order"

const App = () => {
    return (
        <Routes>
            <Route path='/'>
                <Route index element={<Home />} />
                <Route path="/intro" element={<Intro />} />
                <Route path="/aim" element={<Aim />} />
                <Route path="/charity" element={<Charity />} />
                <Route path="/orders" element={<Orders />} />
            </Route>
        </Routes>
    )
}

export default App