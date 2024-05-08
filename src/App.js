import Reg from "./Components/Reg"
import Login from "./Components/Login"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Nav from "./Components/Nav"
let App=()=>{
    return <>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Reg" element={<Reg/>}/>
        <Route path="/Nav" element={<Nav/>}/>
    </Routes>
    </BrowserRouter>
    </>
}
export default App