import {  Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";

import SignIn from "./pages/signIn/signin";
import SignUp from "./pages/signup/signup.component";


export function AppRouter() {
    return (
       
            <Routes>
              <Route path="/" element={<Home></Home>}></Route>
              <Route path="/home" element={<Home></Home>}></Route>
            <Route path="/signup" element={<SignUp></SignUp>}></Route>
             <Route path="/signIn" element={<SignIn></SignIn>}></Route>
            </Routes>
       
    )
}