import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import Axios from "axios"
import Reg from "./Reg"
let Login=()=>{
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
        Axios.post('http://localhost:8080/login/login',msg).then((resp)=>{
            // window.alert(JSON.stringify(resp.data.msg))
            if(JSON.stringify(resp.data.msg)==0)
            {
                window.alert("user not exist,register first")
            nav('/Reg')
            }
            else
            {
                nav('/Nav')
            }
        }).catch(()=>{
            
        });
        
    }
    return <>
    <div className="container mt-5">
        <div className="row">
            <div className="ml-5 col-10">
                <form>
                    <div className="form-group">
                        <label>USERNAME:</label>
                        <input name="username" onChange={uphand} className="form-control" type="text"/>
                    </div>
                    <div className="form-group">
                        <label>PASSWORD:</label>
                        <input onChange={uphand} name="password" className="form-control" type="number"/>
                    </div>
                    <button onClick={submit} className="btn btn-primary">LOGIN</button>
                    <h4 className="mt-3">For new user <Link to='/Reg'>Register</Link> </h4>
                </form>
            </div>
        </div>
    </div>
    </>
}
export default Login