import  Axios  from "axios"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
let Reg=()=>{
    let nav=useNavigate()
    let [msg,upmsg]=useState({
        username:"",
        password:0
    })
    let uphand=(event)=>{
        upmsg({...msg,[event.target.name]:event.target.value})
    }
    let submit=(event)=>{
        event.preventDefault();
        Axios.post('http://localhost:8080/login/register',msg).then((resp)=>{
            window.alert(JSON.stringify(resp.data.msg))
            nav('/Login')
        }).catch(()=>{
            
        });
        
    }
    return <>
    {/* <h3>{JSON.stringify(msg)}</h3> */}
    <div className="container mt-5">
        <div className="row">
            <div className="ml-5 col-10">
                <form>
                    <div className="form-group">
                        <label>USERNAME:</label>
                        <input onChange={uphand} name="username" className="form-control" type="text"/>
                    </div>
                    <div className="form-group">
                        <label>PASSWORD:</label>
                        <input onChange={uphand} name="password" className="form-control" type="number"/>
                    </div>
                    <button onClick={submit} className="btn btn-primary">REGISTER</button>
                    <h4 className="mt-3">For old user <Link to='/Login'>Login</Link> </h4>
                </form>
            </div>
        </div>
    </div>
    </>
}
export  default Reg