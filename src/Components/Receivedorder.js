import Axios from "axios"
import { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router"

let Receivedorder=()=>{
    let nav=useNavigate()
    let[data,updatedata]=useState([])
    let btnref=useRef()
    useEffect(()=>{
        Axios.get('http://localhost:8080/cart/receivedorder').then((resp)=>{
            updatedata(resp.data)
        }).catch()
    })
    
    let cancelhandler=(d)=>{
        // alert(d)
        Axios.put(`http://localhost:8080/cart/update/${d.id}`).then(()=>{
            // nav(0)
        }).catch()
    }
    let accepthandler=(d)=>{
        // alert(d)
        Axios.put(`http://localhost:8080/cart/accept/${d.id}`).then(()=>{
        }).catch()
    }
    return <div className="container">
    <button onClick={()=>{
        nav('/nav')
    }} className="btn btn-primary fa fa-house "> Go To Home</button>
    {/* <h1>{JSON.stringify(data)}</h1> */}
    {data.length>0 ? <>
        <div className="mt-2 container">
        <div className="row">
            <table className="table table-hover table-striped">
                <thead>
                    <tr>
                        <th>BUYER-NAME</th>
                        <th>QTY</th>
                        <th>TOTAL AMOUNT</th>
                        <th>ADDRESS</th>
                        <th>STATUS</th>
                        <th>ACCEPT</th>
                        <th>CANCEL</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((x)=>{
                            return <tr>
                                <td>{x.buyername}</td>
                                <td>{x.qty}</td>
                                <td>{x.price}</td>
                                <td>{x.buyername},{x.street},{x.landmark},{x.city},{x.state},{x.pincode},{x.phnnumber}</td>
                                <td>{x.status}</td>
                                <td><button onClick={accepthandler.bind(this,x)} disabled={x.status!="pending"} className="btn btn-primary">Accept</button></td>
                                <td><button onClick={cancelhandler.bind(this,x)} disabled={x.status!="pending"} className="btn btn-danger">Cancel</button></td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    </div>
    </>:<> <h1>no order available</h1> </>}
    </div>
}
export default Receivedorder