import { useEffect } from "react"
import { useState } from "react"
import  Axios  from "axios"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import { useAuth } from "./Auth"
let Allproduct=()=>{
    let{islg,uplg}=useAuth()
    let [st,upst]=useState([])
    useEffect(()=>{
        Axios.get('http://localhost:8080/product/allproducts').then((res)=>{
            upst(res.data)
        },[st]).catch();
    })
    let nav=useNavigate()
    let lg=()=>{
        Axios.put('http://localhost:8080/login/logout').then().catch();
        uplg(false)
        localStorage.removeItem("islogin")
        nav('/Login')
    }
    let navi=useNavigate()
    let sh=(data)=>{
        navi('/Buy',{state:data})
        // alert(data.image)
        }
        let[id,updateid]=useState()
    let sub=(event)=>{

        updateid(event.target.value)
        
    }
    let na=useNavigate()
    let x=useNavigate()
    let submitHandler=(event)=>{
        event.preventDefault();
        na('/Singlepage',{state:id})
        // window.location.reload()
        // na(0)
    }
    return <>
    {/* <pre>{JSON.stringify(st)}</pre> */}
    {
        islg ? <>
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
            <div className="container">
            <Link to="/Nav" className="navbar-brand">E-com</Link>

            <form className="frm1"  role="search" onSubmit={submitHandler}>
               <label className="label1" for="search">Search for stuff</label>
               <input onInput={sub} className=" input1 ipt1" id="search" name="x" type="number" placeholder="Search product by id..." autofocus required />
               <button  className="bbtn bbtn1" type="submit">Go</button>    
            </form>

            <div className="ml-auto">
                <ul className="navbar-nav">
                    <li><Link className="nav-link">All-product</Link></li>
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
            {
                st.map((x)=>{
                    return <div className="col-6">
                        <div className="card-header">
                        <img width="200rem" height="200rem" src={x.photo}/>
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
        </>:<>
        <h1><Link to='/Login'>Login</Link> to access the page</h1>
        </>
    }
    </>
}
export default Allproduct