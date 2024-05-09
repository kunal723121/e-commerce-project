import { useEffect } from "react"
import { useState } from "react"
import  Axios  from "axios"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
let Allproduct=()=>{
    let [st,upst]=useState([])
    useEffect(()=>{
        Axios.get('http://localhost:8080/product/all').then((res)=>{
            upst(res.data)
        },[st]).catch();
    })
    let nav=useNavigate()
    let lg=()=>{
        Axios.put('http://localhost:8080/login/logout').then().catch();
        nav('/Login')
    }
    let navi=useNavigate()
    let sh=(data)=>{
        navi('/Buy',{state:data})
        // alert(data.image)
        }
    return <>
    {/* <pre>{JSON.stringify(st)}</pre> */}
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
            <div className="container">
            <Link to="/Nav" className="navbar-brand">E-com</Link>
            <div className="ml-auto">
                <ul className="navbar-nav">
                    <li><Link className="nav-link">All-product</Link></li>
                    <li><Link to='/Add' className="nav-link">Add-product</Link></li>
                    {/* <li><Link className="nav-link">Update</Link></li> */}
                    <li><Link to='/Admin' className="nav-link">Admin</Link></li>
                    <li onClick={lg}><Link  className="nav-link">Logout</Link></li>
                </ul>
            </div>
            </div>
        </nav>

    <div className="container">
        <div className="row">
            {
                st.map((x)=>{
                    return <div className="col-12">
                        <div className="card-header">
                        <img width="200px" src={x.photo}/>
                        </div>
                        <div className="card-body">
                        <h6>Id:{x.id}</h6>
                        <h6>Price:{x.price}$</h6>
                        <h6>Category:{x.name}</h6>
                        <h6>About:{x.details}</h6>
                        <button className="btn btn-primary" onClick={sh.bind(null,x)}>Buy</button>
                        </div>
                        </div>
                })
            }
        </div>
    </div>
    </>
}
export default Allproduct