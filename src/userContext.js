import {createContext, useState} from "react";

export  const UserContext =  createContext({});



export function UserContextProvider({children}){

    const [user, setUser] = useState(null);
    const [id, setId]=useState(null);
    return (
        <UserContext.Provider value={{user,setUser,id,setId}}>
            {children}
        </UserContext.Provider>
    );
}