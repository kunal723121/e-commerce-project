import  Axios  from "axios"
import { useState } from "react"
import { useRef } from "react"
import { useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
let Reg=()=>{
    let nav=useNavigate()
    let [msg,upmsg]=useState({
        username:"",
        password:0
    })
    let Reference=useRef()
    useEffect(()=>{
        if(msg.username.length>0 && msg.password.length>0)
        {
            Reference.current.disabled=false
        }
        else
        {
            Reference.current.disabled=true
        }
    })
    let r = useRef();
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
    

        // if(msg.username.length===0)
        // {
        //     r.current.disabled=true
        // }
        // else
        // {
        //     r.current.disabled=false
        // }
        
    }
    return <div className="bgimg">
    <div className="container " >
        <div className="card-body">
            <div className="ml-5 col-10 ">
                <form className="mt-10 ml-5">
                    <div className="form-group">
                        <label className="red">USERNAME</label>
                        <input name="username" onChange={uphand} className="form-control" type="text"/>
                    </div>
                    <div className="form-group">
                        <label className="red">PASSWORD</label>
                        <input onChange={uphand} name="password" className="form-control" type="password"/>
                    </div>
                    <button onClick={submit} ref={Reference} className="btn btn-primary" >Register</button>
                    <h4 className="mt-3">For new user <Link className="red" to='/Login'>Login</Link> </h4>
                </form>
            </div>
        </div>
    </div>
    </div>
}
export  default Reg