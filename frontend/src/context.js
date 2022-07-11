import { createContext, useState } from 'react';

export const AppContext = createContext({
    setUser: () => {},
    user: null,
})

export default function AppContextProvider({ children }) {
    const [user, setUser] = useState();
    
    return (
        <AppContext.Provider value={{
            setUser,
            user,
        }}>
            {children}
        </AppContext.Provider>
    )
}