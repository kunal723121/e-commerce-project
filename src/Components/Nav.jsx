import Axios from "axios"
import { Carousel, CarouselItem } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"
import { useContext, useState } from "react"
import { logc } from "./Login"
import { useAuth } from "./Auth"
let Nav=()=>{
    let{islg,uplg}=useAuth()
    let nav=useNavigate()
    let lgh=()=>{
        Axios.put('http://localhost:8080/login/logout').then().catch();
        nav('/Login')
        uplg(false)
        localStorage.removeItem("islogin")
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
    return <div>
        {
            islg ? <>
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
            <div className="container">
            <Link to="/Nav" className="navbar-brand">E-com</Link>
            
            <form className="frm1"  role="search" onSubmit={submitHandler}>
               <label className="label1" for="search">Search for stuff</label>
               <input  onInput={sub} className=" input1 ipt1" id="search" name="x" type="number" placeholder="Search product by id..." autofocus required />
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
                    <li onClick={lgh}><Link  className="nav-link">Logout</Link></li>
                </ul>
            </div>
            </div>
        </nav>
        <div className="container">
        <Carousel>
        <CarouselItem>
                <img width="100%" height="700px" src="https://9to5mac.com/wp-content/uploads/sites/6/2023/09/iphone-15-pro-wallpaper-2.webp"/>
            </CarouselItem>
            <CarouselItem>
                <img width="100%" height="700px" src="https://media.wired.com/photos/6500ad5757cb6e0af12cab00/master/w_1600%2Cc_limit/Apple-iPhone-15-Pro-Camera-System-Gear.jpg"/>
            </CarouselItem>
            <CarouselItem>
                <img width="100%" height="700px" src="https://www.apple.com/newsroom/videos/iphone-15-pro-action-button/posters/Apple-iPhone-15-Pro-lineup-Action-button-230912.jpg.large_2x.jpg"/>
            </CarouselItem>
        </Carousel>
        </div>
        <nav className="bg-dark ">
        <div className="container ">
            <div className="row">
                <div className="col-4 mt-3">
                    <h5 className="gray">About</h5>
                    <hr color="red"></hr>
                    <h6 className="white">This is e-commerce site,here all types of mobiles and laptops available at discounted price</h6>
                </div>
                <div className="col-4 mt-3">
                    <h5 className="gray">Contact</h5>
                    <hr color="red"></hr>
                    <h6 className="white">Phn : +91 8250929212</h6>
                    <h6 className="white">Email : kunalkumbhakar11@gmail.com</h6>
                    <h6 className="white">Instagram : @kunalkumbhakr22</h6>
                </div>
                <div className="col-4 mt-3">
                    <h5 className="gray">Address</h5>
                    <hr color="red"></hr>
                    <h6 className="white">141,1st Floor,Indiranagar,Bengaluru,Karnataka,560008</h6>
                </div>
            </div>
        </div>
        </nav>
        </> : <><h1><Link to='/Login'>Login</Link> to access the page</h1></>
} 
    </div>
}

export default Nav