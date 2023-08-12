import { Routes, Route } from "react-router-dom";
import Card from "../Components/Card";
import Login from "../Components/Login";
import SignUp from "../Components/SignUp";
// import Navbar from "../Components/Navbar";



function AllRoutes() {
  return (
    
        <Routes>
            <Route path="/" element={<Card />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/Login" element={<Login />} />

           
        </Routes>

    )
}

export default AllRoutes;
