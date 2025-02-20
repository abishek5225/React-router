import { createContext, useContext, useState } from "react";
import React from "react";

const Authcontext = createContext()

export function Authentication({children}){
    const [isAuth, setIsAuth] = useState(false)
    const user = {username: "admin", password: "admin"}

    const login= (username, password) =>{
        if(username === user.username && password === user.password){
            setIsAuth(true)
            return true
        }
        return false
    }
    const logout = () => setIsAuth(false)

    return(
        <Authcontext.Provider value={{isAuth, login, logout}}>
            {children}
        </Authcontext.Provider>
    )
}
export function useAuth() {
  return useContext(Authcontext);
}