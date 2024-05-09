import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import Axios from "axios"
import { useState } from "react"
import { useLocation } from "react-router-dom"
let Update=()=>{
    let nav=useNavigate()
    let lg=()=>{
        Axios.put('http://localhost:8080/login/logout').then().catch();
        nav('/Login')
    }
    let [state,upstate]=useState({
        id:0,
        name:"",
        photo:"",
        price:0,
        deatils:"",
    })
    let l=useLocation();
    let uid=l.state;
    let submit=(event)=>{
        upstate({...state,[event.target.name]:event.target.value})
    }
    let final=(event)=>{
        event.preventDefault();
        Axios.put(`http://localhost:8080/product/update/${uid}`,state).then((resp)=>{
            window.alert(JSON.stringify(resp.data.msg))
        }).catch()
        nav('/Admin')
        // window.alert(uid)
    }
    return <>
    {/* <pre>{JSON.stringify(state)}</pre> */}
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
            <div className="container">
            <Link to="/Nav" className="navbar-brand">E-com</Link>
            <div className="ml-auto">
                <ul className="navbar-nav">
                    <li><Link to='/All' className="nav-link">All-product</Link></li>
                    <li><Link to='/Add' className="nav-link">Add-product</Link></li>
                    {/* <li><Link className="nav-link">Update</Link></li> */}
                    <li><Link to='/Admin' className="nav-link">Admin</Link></li>
                    <li onClick={lg}><Link  className="nav-link">Logout</Link></li>
                </ul>
            </div>
            </div>
        </nav>
    <div className="mt-4 container">
        <div className="card card-body">
            <form>
                <div className="form-group">
                    <label>Product Id</label>
                    <input onChange={submit} name="id" className="form-control" type="number" placeholder="enter product Id..." />
                </div>
                <div className="form-group">
                    <label>Product Name</label>
                    <input onChange={submit} name="name" className="form-control" type="text" placeholder="enter product name..." />
                </div>
                <div className="form-group">
                    <label>Product Price</label>
                    <input onChange={submit} name="price" className="form-control" type="number" placeholder="enter product price..." />
                </div>
                <div className="form-group">
                    <label>Product Image</label>
                    <input onChange={submit} name="photo"  type="file" accept="image/*"/>
                </div>
                <div className="form-group">
                    <label>Product Details</label>
                    <input onChange={submit} name="details" className="form-control" type="text" placeholder="enter produc details..." />
                </div>
                <button onClick={final} className="btn btn-primary">Update</button>
            </form>
        </div>    
    </div>
    </>
}
export default Update