import Axios from "axios";
import { useEffect, useRef, useState } from "react"
import { useLocation, useNavigate } from "react-router"
import { useAuth } from "./Auth";
import { Link } from "react-router-dom";

const Buy=()=>{
    let{islg,uplg}=useAuth()
    let nav=useNavigate()
    let na=useNavigate()
    const[id,updateid]=useState()
    let[qty,updateqty]=useState(1);
    let reference=useRef()
    let[formdata,updatedata]=useState({
        street:"",
        pincode:"",
        state:"",
        phn:"",
        city:"",
        landmark:""
    })
    const x=useLocation()
    const datas=x.state
    // console.log(datas) 
    let lgh=()=>{
        Axios.put('http://localhost:8080/login/logout').then().catch();
        nav('/Login')
        uplg(false)
        localStorage.removeItem("islogin")
    }
    
    let sub=(event)=>{

        updateid(event.target.value)
        
    }
    let submitHandler=(event)=>{
        event.preventDefault();
        na('/Singlepage',{state:id})
        // window.location.reload()
        // na(0)
    }

    let inchand=()=>{
        updateqty(qty+1)
    }
    let dechand=()=>{
        
        updateqty(qty-1)
       
    }
    
    let value=(e)=>{
        // e.preventDefault()
        updatedata({...formdata,[e.target.name]:e.target.value})
    }
    
    
    useEffect(() => {

        if (qty === 1) {
          reference.current.disabled = true;
        } else {
          reference.current.disabled = false;
        }
      }, [qty]);
    
    const buying = () => {
        if (datas) {
            const item = {
                id: datas.id,
                sellername: datas.username,
                qty: qty,
                price: qty * datas.price,
                street: formdata.street,
                landmark: formdata.landmark,
                pincode: formdata.pincode,
                state: formdata.state,
                phnnumber: formdata.phn,
                city: formdata.city
            };
            Axios.post('http://localhost:8080/cart/add', item)
                .then(resp => {
                    window.alert(resp.data.msg);
                })
                .catch(err => console.error(err));
        }
    };
    return (
    <>
    {
    islg ? (
    <>
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
                    <li onClick={lgh}><Link  className="nav-link">Logout</Link></li>
                </ul>
            </div>
            </div>
        </nav>
        <div className="mt-3 container">
    <table className="table table-hover table-striped">
        <thead>
            <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>PHOTO</th>
            <th>PRICE</th>
            <th>QTY</th>
            <th>TOTAL</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                    <td>{datas.id}</td>
                    <td>{datas.name}</td>
                    <td><img width="70rem" src={datas.photo}></img></td>
                    <td>{datas.price}</td>
                    <td><button onClick={inchand} className="btn fa fa-plus-circle"></button>{qty}<button onClick={dechand} className="btn fa fa-minus-circle"  ref={reference}></button></td>
                    <td>{datas.price*qty}$</td>
            </tr>
        </tbody>
    </table>
    <form>
        <div>
            <div className="row">
                <div className="col-6">
                <div className="form-group">
                  <label>STREET</label>
                  <input onChange={value} name="street" className="form-control" type="text" />
                </div>
                <div className="form-group">
                  <label>LANDMARK</label>
                  <input onChange={value}  name="landmark" className="form-control" type="text" />
                </div>
                <div className="form-group">
                  <label>PHONE</label>
                  <input onChange={value}  name="phn" className="form-control" type="text" />
                </div>
                </div>
                <div className="col-6">
                <div className="form-group">
                  <label>CITY</label>
                  <input onChange={value}  name="city" className="form-control" type="text" />
                </div>
                <div className="form-group">
                  <label>PINCODE</label>
                  <input onChange={value}  name="pincode" className="form-control" type="text" />
                </div>
                <div className="form-group">
                  <label>STATE</label>
                  <input onChange={value}  name="state" className="form-control" type="text" />
                </div>
                
                </div>
            </div>
            {/* <button onClick={buying} className="l btn btn-primary">BUY</button> */}
                
        </div>
    </form>
    <button  onClick={buying} className="l btn btn-primary">BUY</button>
    </div>
    </>
    ):(
    <><h1>login first</h1></>
    )
    }
    
    </>)
}
export default Buy




// import Axios from "axios";
// import { useEffect, useRef, useState } from "react";
// import { useLocation, useNavigate } from "react-router";
// import { useAuth } from "./Auth";
// import { Link } from "react-router-dom";

// const Buy = () => {
//     const { islg, uplg } = useAuth();
//     const nav = useNavigate();
//     const [id, updateid] = useState();
//     const [qty, updateqty] = useState(1);
//     const [formdata, updatedata] = useState({
//         street: "",
//         pincode: "",
//         state: "",
//         phn: "",
//         city: "",
//         landmark: ""
//     });
//     const reference = useRef();
//     const x = useLocation();
//     const datas = x.state;

//     const lgh = () => {
//         Axios.put('http://localhost:8080/login/logout')
//             .then(() => {
//                 uplg(false);
//                 localStorage.removeItem("islogin");
//                 nav('/Login');
//             })
//             .catch(err => console.error(err));
//     };

//     const sub = (event) => {
//         updateid(event.target.value);
//     };

//     const submitHandler = (event) => {
//         event.preventDefault();
//         nav('/Singlepage', { state: id });
//     };

//     const inchand = () => {
//         updateqty(qty + 1);
//     };

//     const dechand = () => {
//         if (qty > 1) {
//             updateqty(qty - 1);
//         }
//     };

//     const value = (e) => {
//         updatedata({ ...formdata, [e.target.name]: e.target.value });
//     };

//     useEffect(() => {
//         reference.current.disabled = qty === 1;
//     }, [qty]);

//     const buying = () => {
//         if (datas) {
//             const item = {
//                 id: datas.id,
//                 sellername: datas.username,
//                 qty: qty,
//                 price: qty * datas.price,
//                 street: formdata.street,
//                 landmark: formdata.landmark,
//                 pincode: formdata.pincode,
//                 state: formdata.state,
//                 phnnumber: formdata.phn,
//                 city: formdata.city
//             };
//             Axios.post('http://localhost:8080/cart/add', item)
//                 .then(resp => {
//                     window.alert(resp.data.msg);
//                 })
//                 .catch(err => console.error(err));
//         }
//     };

//     return (
//         <>
//             {islg ? (
//                 <>
//                     <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
//                         <div className="container">
//                             <Link to="/Nav" className="navbar-brand">E-com</Link>
//                             <form className="frm1" role="search" onSubmit={submitHandler}>
//                                 <label className="label1" htmlFor="search">Search for stuff</label>
//                                 <input onInput={sub} className="input1 ipt1" id="search" name="x" type="number" placeholder="Search product by id..." autoFocus required />
//                                 <button className="bbtn bbtn1" type="submit">Go</button>
//                             </form>
//                             <div className="ml-auto">
//                                 <ul className="navbar-nav">
//                                     <li><Link to='/All' className="nav-link">All-product</Link></li>
//                                     <li><Link to='/Add' className="nav-link">Add-product</Link></li>
//                                     <li><Link to='/Admin' className="nav-link">Admin</Link></li>
//                                     <li><Link to='/placedorder' className="nav-link">Placed-Order</Link></li>
//                                     <li><Link to='/receivedorder' className="nav-link">Received-Order</Link></li>
//                                     <li onClick={lgh}><Link to='' className="nav-link">Logout</Link></li>
//                                 </ul>
//                             </div>
//                         </div>
//                     </nav>
//                     <div className="mt-3 container">
//                         <table className="table table-hover table-striped">
//                             <thead>
//                                 <tr>
//                                     <th>ID</th>
//                                     <th>NAME</th>
//                                     <th>PHOTO</th>
//                                     <th>PRICE</th>
//                                     <th>QTY</th>
//                                     <th>TOTAL</th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 <tr>
//                                     <td>{datas.id}</td>
//                                     <td>{datas.name}</td>
//                                     <td><img width="70rem" src={datas.photo} alt={datas.name} /></td>
//                                     <td>{datas.price}</td>
//                                     <td>
//                                         <button type="button" onClick={inchand} className="btn fa fa-plus-circle"></button>
//                                         {qty}
//                                         <button type="button" onClick={dechand} className="btn fa fa-minus-circle" ref={reference}></button>
//                                     </td>
//                                     <td>{datas.price * qty}$</td>
//                                 </tr>
//                             </tbody>
//                         </table>
//                         <form>
//                             <div>
//                                 <div className="row">
//                                     <div className="col-6">
//                                         <div className="form-group">
//                                             <label>STREET</label>
//                                             <input onChange={value} name="street" className="form-control" type="text" />
//                                         </div>
//                                         <div className="form-group">
//                                             <label>LANDMARK</label>
//                                             <input onChange={value} name="landmark" className="form-control" type="text" />
//                                         </div>
//                                         <div className="form-group">
//                                             <label>PHONE</label>
//                                             <input onChange={value} name="phn" className="form-control" type="text" />
//                                         </div>
//                                     </div>
//                                     <div className="col-6">
//                                         <div className="form-group">
//                                             <label>CITY</label>
//                                             <input onChange={value} name="city" className="form-control" type="text" />
//                                         </div>
//                                         <div className="form-group">
//                                             <label>PINCODE</label>
//                                             <input onChange={value} name="pincode" className="form-control" type="text" />
//                                         </div>
//                                         <div className="form-group">
//                                             <label>STATE</label>
//                                             <input onChange={value} name="state" className="form-control" type="text" />
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <button type="button" onClick={buying} className="l btn btn-primary">BUY</button>
//                             </div>
//                         </form>
//                     </div>
//                 </>
//             ) : (
//                 <h1>Login first</h1>
//             )}
//         </>
//     );
// };

// export default Buy;
