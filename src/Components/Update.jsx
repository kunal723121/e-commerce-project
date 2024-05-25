import { Link, useLocation } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import Axios from "axios"
import { useState } from "react"
import { useAuth } from "./Auth"
let Update=()=>{
    let{islg,uplg}=useAuth();
    let l=useLocation()
    let uid=l.state
    let nav=useNavigate()
    let lg=()=>{
        Axios.put('http://localhost:8080/login/logout').then().catch();
        uplg(false)
        localStorage.removeItem("islogin")
        nav('/Login')
    }
    let [state,upstate]=useState({
        
        // id:0,
        name:"",
        photo:"",
        price:0,
        deatils:"",
    })
    let photo=(event)=>{
        let ph=event.target.files[0];
        let reader=new FileReader();
        reader.readAsDataURL(ph);
        reader.addEventListener("load",()=>{
            if(reader.result)
            {
                upstate({...state,photo:reader.result})
            }
            else{
                
            }
        })
    }
    let submit=(event)=>{
        upstate({...state,[event.target.name]:event.target.value})
    }
    let final=(event)=>{
        event.preventDefault();
        Axios.put(`http://localhost:8080/product/update/${uid}`,state).then((resp)=>{
            window.alert(JSON.stringify(resp.data.msg))
        }).catch()
    }

    


    let[id,updateid]=useState()
    let sub=(event)=>{

        updateid(event.target.value)
        
    }
    let na=useNavigate()
    let submitHandler=(event)=>{
        event.preventDefault();
        na('/Singlepage',{state:id})
        // window.location.reload()
        // na(0)
    }
    return <>
    {/* <pre>{JSON.stringify(state)}</pre> */}
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
    <div className="mt-4 container">
        <div className="card card-body">
            <form>
                {/* <div className="form-group">
                    <label>Registered Username</label>
                    <input onChange={submit} name="username" className="form-control" type="text" placeholder="enter registered username..." />
                </div> */}
                {/* <div className="form-group">
                    <label>Product Id</label>
                    <input onChange={submit} name="id" className="form-control" type="number" placeholder="enter product Id..." />
                </div> */}
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
                    <input onChange={photo}  type="file" accept="image/*"/>
                </div>
                <div className="form-group">
                    <label>Product Details</label>
                    <input onChange={submit} name="details" className="form-control" type="text" placeholder="enter produc details..." />
                </div>
                <button onClick={final} className="btn btn-primary">Submit</button>
            </form>
        </div>    
    </div>
        </>:<>
        <h1><Link to='/Login'>Login</Link> to access the page</h1>
        </>
    }
    
    </>
}
export default Update