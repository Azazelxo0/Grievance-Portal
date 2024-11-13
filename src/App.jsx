import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Submission from './Pages/Submission'


function App() {
  return (
    <>

    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/submission' element={<Submission/>}/>
      </Routes>

  
      
      
    </>
  )
}

export default App
