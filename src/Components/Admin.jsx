import Axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router"
import { Link } from "react-router-dom"

let Admin=()=>{
    let[st,upstate]=useState([])
    useEffect(()=>{
        Axios.get('http://localhost:8080/product/all').then((r)=>{
            upstate(r.data)
        },[st]).catch()
    })
    let nav=useNavigate()
    let lg=()=>{
        Axios.put('http://localhost:8080/login/logout').then().catch();
        nav('/Login')
    }
    let uphand=(data)=>{
        nav('/Update',{state:data})
    }
    let delhand=(data)=>{
        Axios.delete(`http://localhost:8080/product/delete/${data}`).then((r)=>{
            window.alert(r.data.msg)
        }).catch();
        nav('/Admin')
    }
    return <>
    {/* <pre>{JSON.stringify(st)}</pre> */}
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
        <div className="container">
        <table className="table">
            <thead  >
                <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>PHOTO</th>
                <th>PRICE</th>
                <th>UPDATE</th>
                <th>DELETE</th>
                </tr>
            </thead>
            <tbody>
                {
                    st.map((x)=>{
                        return <tr><td>{x.id}</td>
                            <td>{x.name}</td>
                            <td><img length="100px" width="100px" src={x.photo} /></td>
                            <td>{x.price}$</td>
                            <td><button onClick={uphand.bind(null,x.id)} className="btn btn-primary">Update</button></td>
                            <td><button onClick={delhand.bind(null,x.id)} className="btn btn-danger">Delete</button></td>
                            </tr>
                            
                    })
                }
            </tbody>
        </table>
        </div>
    </>
}
export default Admin