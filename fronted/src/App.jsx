import './App.css'
import Admin from './Component/Admin/Admin';
import Dashboard from './Component/Dashboard/Dashboard'
import History from './Component/History/History';
import Login from './Component/Login/Login';
import Sidebar from './Component/SideBar/Sidebar'
import { Route, Routes } from 'react-router-dom'



function App() {
  
  return (
    <div className="App">
      <Sidebar />
      <Routes>

        <Route path='/' element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/history" element={<History />} />
        <Route path="/admin" element={<Admin />} />
        
      </Routes>
    </div>
  );

}

export default App
