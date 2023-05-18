import React, {createContext, useState} from 'react';

const AppContext = createContext({user: undefined, setUser: Function});

const AppProvider = ({children}) => {
  const [user, setUser] = useState(undefined);

  return (
    <AppContext.Provider value={{user, setUser}}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
