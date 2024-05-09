import Reg from "./Components/Reg"
import Login from "./Components/Login"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Nav from "./Components/Nav"
import Add from "./Components/Add"
import Allproduct from "./Components/Allproduct"
import Buy from "./Components/Buy"
import Admin from "./Components/Admin"
import Update from "./Components/Update"
let App=()=>{
    return <>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Reg" element={<Reg/>}/>
        <Route path="/Nav" element={<Nav/>}/>
        <Route path="/Add" element={<Add/>}/>
        <Route path="/All" element={<Allproduct/>}/>
        <Route path="/Buy" element={<Buy/>}/>
        <Route path="/Admin" element={<Admin/>}/>
        <Route path="/Update" element={<Update/>}/>
    </Routes>
    </BrowserRouter>
    </>
}
export default App