import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Navbar from "./Components/navbar";
import './App.css';
import User from "./Components/Registration";
import LoginUser from "./Components/Login";
import Mens from "./Components/Products";
function App() 
{
return (
  <>
    <Router>
      <Routes>
        <Route path="/">
        <Route index element={<Navbar/>} />
        <Route path="/Products" element={<Mens/>} />
        <Route path="/Login" element={<LoginUser/>} />
        <Route path="/Registration" element={<User/>} />
        </Route>
      </Routes>
    </Router>
    </>
  )
  }

export default App;