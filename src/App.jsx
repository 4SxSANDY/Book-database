import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './Home.jsx';
import { Addbookform } from './components/Addbookform';
export const App = () => {
  return (
    <BrowserRouter>
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/addbookform" element={<Addbookform/>}/>
       </Routes>
    </BrowserRouter>
  )
}

export default App;