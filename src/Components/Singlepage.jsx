import Axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router"
import { Link } from "react-router-dom";
import { useAuth } from "./Auth";
let Singlepage=()=>{
    let{islg,uplg}=useAuth()
    let x=useLocation()
    let uid=x.state;
    let[st,upst]=useState({})
    let[id,updateid]=useState()
    let nav=useNavigate()
    useEffect(()=>{
        Axios.get(`http://localhost:8080/product/all/${uid}`).then((resp)=>{
            upst(resp.data)
        }).catch();
    },[st])
    let lg=()=>{
        Axios.put('http://localhost:8080/login/logout').then().catch();
        uplg(false)
        localStorage.removeItem("islogin")
        nav('/Login')
    }
    if(st.msg===0)
    {
       nav('/Nav')
       return window.alert("Invalid id")
    }
   
    let sub=(event)=>{

        updateid(event.target.value)
        
    }
    
    let submitHandler=(event)=>{
        event.preventDefault();
        nav('/Singlepage',{state:id})
        // window.location.reload()
        // na(0)
    }

    return <>
    {/* <h1>{uid}</h1> */}
    {
        islg ? <>
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
            <div className="container">
            <Link to="/Nav" className="navbar-brand">E-com</Link>
            
            <form className="frm1"  role="search" onSubmit={submitHandler}>
               <label className="label1" for="search">Search for stuff</label>
               <input  onInput={sub} className=" input1 ipt1" id="search" name="x" type="number" placeholder="Search product by id..." autofocus required />
               <button  className="bbtn bbtn1" type="submit">Go</button>    
            </form>

            <div className="ml-auto">
                <ul className="navbar-nav">
                    <li><Link to='/All' className="nav-link">All-product</Link></li>
                    <li><Link to='/Add' className="nav-link">Add-product</Link></li>
                    {/* <li><Link className="nav-link">Update</Link></li> */}
                    <li><Link to='/Admin' className="nav-link">Admin</Link></li>
                    <li><Link to='/placedorder' className="nav-link"> Placed-Order</Link></li>
                    <li><Link to='/receivedorder' className="nav-link"> Received-Order</Link></li>
                    <li onClick={lg}><Link  className="nav-link">Logout</Link></li>
                </ul>
            </div>
            </div>
        </nav>
    
    <div className="container">
        <div className="row">
            
            <div className="col-12">
                <div className="card-header">
                    <img width="200px" src={st.photo}/>
                </div>
                <div className="card-body">
                    <h6>Id:{st.id}</h6>
                    <h6>Price:{st.price}$</h6>
                    <h6>Category:{st.name}</h6>
                    <h6>About:{st.details}</h6>
                    {/* <button className="btn btn-primary" onClick={sh.bind(null,x)}>Buy</button> */}
                    </div>
                </div>
            
        </div>
    </div>
        </>:<>
        <h1><Link to='/Login'>Login</Link> to access the page</h1>
        </>
    }
    </>

}
export default Singlepage