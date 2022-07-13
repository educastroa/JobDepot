import { createContext, useState } from 'react';

export const AppContext = createContext({
    jobs: [],
    setJobs: () => {},
    setUser: () => {},
    user: null,
})

export default function AppContextProvider({ children }) {
    const [user, setUser] = useState();
    const [jobs, setJobs] = useState([]);
    
    return (
        <AppContext.Provider value={{
            jobs,
            setJobs,
            setUser,
            user,
        }}>
            {children}
        </AppContext.Provider>
    )
}