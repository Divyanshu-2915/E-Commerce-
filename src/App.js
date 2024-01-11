
import React from "react";
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from "react-router-dom";
import Navbar from "./Components/navbar";
import './App.css';
import User from "./Components/Registration";
import LoginUser from "./Components/Login";
import Mens from "./Components/Fashion";
import NewUser from "./Components/sample";
import About from "./Components/About";
import Contact from "./Components/Contact";
import AllItem from "./Components/Categories";
import Cart from "./Components/Cart";
import PlaceOrder from "./Components/Orders";
import Accessories from "./Components/Accessories";
import FootWear from "./Components/FootWear";

function App() {
  return (
    <>

      <Router>
        <Routes>
          <Route path="/">
            <Route index element={<Navbar />} />
            <Route path="/Fashion" element={<Mens />} />
            <Route path="/Login" element={<LoginUser />} />
            <Route path="/Registration" element={<User />} />
            <Route path="/sample" element={<NewUser />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Categories" element={<AllItem />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/sample" element={<NewUser />} />
            <Route path="/Accessories" element={<Accessories />} />
            <Route path="/FootWear" element={<FootWear />} />
          </Route>
        </Routes>
      </Router>
      {/*
    <BrowserRouter>
      <PlaceOrder/>
    </BrowserRouter>
    */}
    </>
  )
}

export default App;



//---

