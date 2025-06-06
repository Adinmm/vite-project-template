import { Routes, Route } from 'react-router-dom'
import Login from './Pages/Login'
import Registration from './Pages/Registration'

const App = ()=>{
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/registration" element={<Registration />} />
    </Routes>
  )
}

export default App