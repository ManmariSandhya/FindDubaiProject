import {  Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";


export function AppRouter() {
    return (
       
            <Routes>
              <Route path="/" element={<Home></Home>}></Route>
              <Route path="/home" element={<Home></Home>}></Route>
            </Routes>
       
    )
}