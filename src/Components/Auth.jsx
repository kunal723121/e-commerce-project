import { createContext, useContext, useState } from "react"
export let con=createContext()
export function useAuth(){
    return useContext(con)
}
export let Authprovider=(props)=>{
    let[islg,uplg]=useState(()=>{
        return localStorage.getItem("islogin")==="true";
    })
    let val={
        islg,
        uplg
    }
    return <>
    <con.Provider value={val}>
        {props.children}
    </con.Provider>
    </>
}
