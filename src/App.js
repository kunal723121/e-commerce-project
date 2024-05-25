import Reg from "./Components/Reg"
// import Login from "./Components/Login"
import { Login } from "./Components/Login"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Nav from "./Components/Nav"
import Add from "./Components/Add"
import Allproduct from "./Components/Allproduct"
import Buy from "./Components/Buy"
import Admin from "./Components/Admin"
import Update from "./Components/Update"
import Singlepage from "./Components/Singlepage"
import Receivedorder from "./Components/Receivedorder"
import { Authprovider } from "./Components/Auth"
import Placedorder from "./Components/Placedorder"
let App=()=>{
    return <>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Authprovider><Login/></Authprovider>}/>
        <Route path="/Login" element={<Authprovider><Login/></Authprovider>}/>
        <Route path="/Reg" element={<Reg/>}/>
        <Route path="/placedorder" element={<Placedorder/>}/>
        <Route path="/receivedorder" element={<Authprovider><Receivedorder/></Authprovider>}/>
        <Route path="/Nav" element={<Authprovider><Nav/></Authprovider>}/>
        <Route path="/Add" element={<Authprovider><Add/></Authprovider>}/>
        <Route path="/All" element={<Authprovider><Allproduct/></Authprovider>}/>
        <Route path="/Buy" element={<Authprovider><Buy/></Authprovider>}/>
        <Route path="/Admin" element={<Authprovider><Admin/></Authprovider>}/>
        <Route path="/Update" element={<Authprovider><Update/></Authprovider>}/>
        <Route path="/Singlepage" element={<Authprovider><Singlepage/></Authprovider>}/>
    </Routes>
    </BrowserRouter>
    </>
}
export default App