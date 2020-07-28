import React, {createContext, useState} from 'react';



export const ContextUser = createContext({});

export const UserProvider = ({children}) => {

    const [user, setUser] = useState(null)

    const updateUser = (user) => {
        setUser(user)
    }

    return <ContextUser.Provider value={{user, updateUser}}>{children}</ContextUser.Provider>
}