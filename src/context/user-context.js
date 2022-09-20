import {createContext, useState} from 'react';

export const userContext = createContext({
    currentUser: '',
    setCurrentUser: ()=> null
})

export const UserProvider = ({children}) =>{
    const [currentUser, setCurrentUser] = useState('');
    const value = {currentUser, setCurrentUser};

    return(
        <userContext.Provider value={value}>
            {children}
        </userContext.Provider>
    )
}