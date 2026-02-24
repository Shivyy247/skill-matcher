import { useState, useEffect } from "react";
import "./App.css";
import Admin from "./Component/Admin/Admin";
import Dashboard from "./Component/Dashboard/Dashboard";
import History from "./Component/History/History";
import Login from "./Component/Login/Login";
import Sidebar from "./Component/SideBar/Sidebar";
import { Route, Routes } from "react-router-dom";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className="App">
      <Sidebar darkMode={darkMode} toggleTheme={toggleTheme} />

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/history" element={<History />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </div>
  );
}

export default App;

// import './App.css'
// import Admin from './Component/Admin/Admin';
// import Dashboard from './Component/Dashboard/Dashboard'
// import History from './Component/History/History';
// import Login from './Component/Login/Login';
// import Sidebar from './Component/SideBar/Sidebar'
// import { Route, Routes } from 'react-router-dom'

// function App() {

//   return (
//     <div className="App">
//       <Sidebar />
//       <Routes>

//         <Route path='/' element={<Login />} />
//         <Route path="/dashboard" element={<Dashboard />} />
//         <Route path="/history" element={<History />} />
//         <Route path="/admin" element={<Admin />} />

//       </Routes>
//     </div>
//   );

// }

// export default App
