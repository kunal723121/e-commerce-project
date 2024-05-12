import { createContext, useContext, useState } from "react"
export let con=createContext()
export function useAuth(){
    return useContext(con)
}
export let Authprovider=(props)=>{
    let[islg,uplg]=useState(false)
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
