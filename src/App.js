import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Navbar from "./Components/navbar";
import './App.css';
import User from "./Components/Registration";
import LoginUser from "./Components/Login";
import Mens from "./Components/Products";
import NewUser from "./Components/sample";
import About from "./Components/About";
import Contact from "./Components/Contact";

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
        <Route path="/sample" element={<NewUser/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/Contact" element={<Contact/>}/>
        </Route>
      </Routes>
    </Router>
    </>
  )
  }

export default App;