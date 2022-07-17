import { createContext, useState } from 'react';

export const AppContext = createContext({
  jobs: [],
  setJobs: () => { },
  setUser: () => { },
  user: null,
  messages: [],
  setMessages: () => { },
});

export default function AppContextProvider({ children }) {
  const [user, setUser] = useState();
  const [jobs, setJobs] = useState([]);
  const [messages, setMessages] = useState([]);


  return (
    <AppContext.Provider value={{
      jobs,
      setJobs,
      setUser,
      user,
      messages,
      setMessages,
    }}>
      {children}
    </AppContext.Provider>
  );
}
